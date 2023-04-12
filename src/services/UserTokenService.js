import { ForbiddenError, UnauthorizedError } from '../errors/baseErrors.js';
import BaseUserModel from '../models/BaseUserModel.js';
import UserTokenModel from '../models/UserTokenModel.js';
import formatExpiresAt from '../utils/general/formatExpiresAt.js';
import { comparePasswords } from '../utils/libs/bcrypt.js';
import { decodeRefreshToken, signJwts } from '../utils/libs/jwt.js';

export async function processLogin({ email, password, token }) {
  const foundUser = await BaseUserModel.findOne({ email })
    .select('+password')
    .lean()
    .exec();
  if (!foundUser) throw new UnauthorizedError('Wrong email or password.');

  // Evaluate password
  const isMatch = await comparePasswords(password, foundUser.password);
  if (!isMatch) throw new UnauthorizedError('Wrong email or password.');

  // Evaluate if the user activated its account after registration
  if (!foundUser.emailVerified) throw new ForbiddenError('Account inactive');

  // Evaluate token reuse
  if (token) {
    const foundToken = await UserTokenModel.findOne({
      token,
    }).exec();

    // Detected refresh token reuse! Clear all existing refreshTokens
    if (!foundToken) await UserTokenModel.deleteMany({ user: foundUser._id });
  }

  // Takes off only the necessary info about the user
  const { createdAt, updatedAt, password: pass, ...tokenUserData } = foundUser;

  // Create JWTs
  const { accessToken, refreshToken } = signJwts(tokenUserData);

  // Saving refreshToken in the DB
  const expiresAt = formatExpiresAt(process.env.REFRESH_TOKEN_EXPIRE); // in seconds
  await UserTokenModel.create({
    user: foundUser._id,
    token: refreshToken,
    expiresAt,
  });

  return { accessToken, refreshToken };
}

export async function processRefreshToken(token) {
  if (!token) throw new UnauthorizedError('Unauthorized');

  const decoded = decodeRefreshToken(token);
  const foundToken = await UserTokenModel.findOne({ token })
    .populate('user')
    .exec();

  if (!foundToken) {
    const hackedUser = await BaseUserModel.findOne({
      _id: decoded.userId,
    }).exec();

    await UserTokenModel.deleteMany({ user: hackedUser._id }).exec();
    throw new ForbiddenError('Token reuse');
  }

  const userId = foundToken.user._id.toString();
  if (userId !== decoded.userId) throw new ForbiddenError('Tampered token');

  // Refresh token still valid
  await foundToken.deleteOne(); // Invalidate actual refresh token

  const {
    createdAt,
    updatedAt,
    password: pass,
    ...tokenUserData
  } = foundToken.user.toObject(); // It is necessary to use "toObject" because foundToken is a mongoose document

  // Create JWTs
  const { accessToken, refreshToken } = signJwts(tokenUserData);

  // Creating a instance of the refresh token in the db
  const expiresAt = formatExpiresAt(process.env.REFRESH_TOKEN_EXPIRE); // in miliseconds
  await UserTokenModel.create({
    user: userId,
    token: refreshToken,
    expiresAt,
  });

  return { accessToken, refreshToken };
}

export async function deleteUserToken(token) {
  return UserTokenModel.findOneAndDelete({ token }).exec();
}
