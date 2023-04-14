import { NotFoundError } from '../errors/baseErrors.js';
import PostModel from '../models/PostModel.js';

export async function get(inputFilters) {
  return PostModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundPost = await PostModel.findById(_id).lean().exec();
  if (!foundPost) throw new NotFoundError('Post not found');

  return foundPost;
}

export async function create(inputData) {
  const newPost = await PostModel.create(inputData);

  return newPost;
}

export async function update({ _id, inputData }) {
  const foundPost = await PostModel.findById(_id).exec();
  if (!foundPost) throw new NotFoundError('Post not found');

  return foundPost.set(inputData).save();
}

export async function destroy(_id) {
  const foundPost = await PostModel.findById(_id).exec();
  if (!foundPost) throw new NotFoundError('Post not found');

  await foundPost.deleteOne();
}
