import { NotFoundError } from '../errors/baseErrors.js';
import CommentModel from '../models/CommentModel.js';

export async function get(inputFilters) {
  return CommentModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundComment = await CommentModel.findById(_id).lean().exec();
  if (!foundComment) throw new NotFoundError('Comment not found');

  return foundComment;
}

export async function create(inputData) {
  const newComment = await CommentModel.create(inputData);

  return newComment;
}

export async function update({ _id, inputData }) {
  const foundComment = await CommentModel.findById(_id).exec();
  if (!foundComment) throw new NotFoundError('Comment not found');

  return foundComment.set(inputData).save();
}

export async function destroy(_id) {
  const foundComment = await CommentModel.findById(_id).exec();
  if (!foundComment) throw new NotFoundError('Comment not found');

  await foundComment.deleteOne();
}
