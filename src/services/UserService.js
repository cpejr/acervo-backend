import { NotFoundError } from '../errors/baseErrors.js';
import UserModel from '../models/UserModel.js';
// import UserPwdTokenModel from '../models/UserPwdTokenModel.js';
// import {
//   decodeForgotPasswordToken,
//   signForgotPasswordJwt,
// } from '../utils/libs/jwt.js';

export async function create(inputData) {
  const { password, ...newUser } = (
    await UserModel.create(inputData)
  ).toObject();

  return newUser;
}

export async function update({ _id, inputData }) {
  const user = await UserModel.findById(_id).toObject();
  if (!user) return NotFoundError('User not found');

  return user.set(inputData).save();
}
