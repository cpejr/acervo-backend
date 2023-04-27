import { NotFoundError } from '../errors/baseErrors.js';
import SavedPostModel from '../models/SavedPostModel.js';

export async function get(inputFilters) {
  return SavedPostModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundSavedPost = await SavedPostModel.findById(_id).lean().exec();
  if (!foundSavedPost) throw new NotFoundError('SavedPost not found');

  return foundSavedPost;
}

export async function create(inputData) {
  const newSavedPost = await SavedPostModel.create(inputData);

  return newSavedPost;
}

export async function update({ _id, inputData }) {
  const foundSavedPost = await SavedPostModel.findById(_id).exec();
  if (!foundSavedPost) throw new NotFoundError('SavedPost not found');

  return foundSavedPost.set(inputData).save();
}

export async function destroy(_id) {
  const foundSavedPost = await SavedPostModel.findById(_id).exec();
  if (!foundSavedPost) throw new NotFoundError('SavedPost not found');

  await foundSavedPost.deleteOne();
}
