import * as EmailHandler from '../mail/handlers.js';
import UserValidator from '../validators/UserValidator.js';
import UserService from '../services/UserService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { decodePwdToken } from '../utils/libs/jwt.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';

export const create = asyncHandler(async (req, res) => {
  const inputData = UserValidator.create(req);
  const newUser = await UserService.create(inputData);

  const token = pwdJwts(newUser._id);
  await EmailHandler.confirmEmail(token, newUser);

  res.status(SUCCESS_CODES.CREATED).json(newUser);
});

export const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = UserValidator.verifyEmail(req);
  const { userId } = decodePwdToken(token);

  const verifiedUser = await UserService.update({
    _id: userId,
    inputData: { emailVerified: true },
  });

  res.status(SUCCESS_CODES.OK).json(verifiedUser);
});

// export const update = asyncHandler(async (req, res) => {
//   const inputData = UserValidator.update(req);
//   const updatedUser = await UserService.update({ _id, inputData });
//   res.status(200).json(updatedUser);
// });
