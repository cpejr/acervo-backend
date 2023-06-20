/* eslint-disable import/prefer-default-export */
import { NotFoundError } from '../errors/baseErrors.js';
import BaseUserModel from '../models/BaseUserModel.js';

export async function verifyUser({ _id, inputData }) {
  const user = await BaseUserModel.findById(_id).toObject();
  if (!user) return NotFoundError('User not found');

  return user.set(inputData).save();
}
