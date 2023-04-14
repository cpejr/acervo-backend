import { NotFoundError } from '../errors/baseErrors.js';
import RatingModel from '../models/RatingModel.js';

export async function get(inputFilters) {
  return RatingModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundRating = await RatingModel.findById(_id).lean().exec();
  if (!foundRating) throw new NotFoundError('Rate not found');

  return foundRating;
}

export async function getByUser(_user) {
  const foundRating = await RatingModel.find({ user: _user })
    .populate(['user', 'product'])
    .lean()
    .exec();
  if (!foundRating) throw new NotFoundError('Rate not found');

  return foundRating;
}

export async function getByProduct(_product) {
  const foundRating = await RatingModel.find({ product: _product })
    .populate(['user', 'product'])
    .lean()
    .exec();
  if (!foundRating) throw new NotFoundError('Rate not found');

  return foundRating;
}

export async function create(inputData) {
  const newRating = await RatingModel.create(inputData);

  return newRating;
}

export async function update({ _id, inputData }) {
  const foundRating = await RatingModel.findById(_id).exec();
  if (!foundRating) throw new NotFoundError('Rate not found');

  return foundRating.set(inputData).save();
}

export async function destroy(_id) {
  const foundRating = await RatingModel.findById(_id).exec();
  if (!foundRating) throw new NotFoundError('Rate not found');

  await foundRating.deleteOne();
}
