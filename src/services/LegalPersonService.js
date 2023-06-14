import { NotFoundError } from '../errors/baseErrors.js';
import LegalPersonModel from '../models/LegalPersonModel.js';

export async function get(inputFilters) {
  return LegalPersonModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundUser = await LegalPersonModel.findById(_id).lean().exec();
  if (!foundUser) throw new NotFoundError('User not found');

  return foundUser;
}

export async function create(inputData) {
  const { password, ...newUser } = (
    await LegalPersonModel.create(inputData)
  ).toObject();

  return newUser;
}

export async function update({ _id, inputData }) {
  const foundUser = await LegalPersonModel.findById(_id).exec();
  if (!foundUser) throw new NotFoundError('User not found');

  return foundUser.set(inputData).save();
}

export async function destroy(_id) {
  const foundUser = await LegalPersonModel.findById(_id).exec();
  if (!foundUser) throw new NotFoundError('User not found');

  await foundUser.deleteOne();
}
