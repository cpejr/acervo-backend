import * as CommentService from '../services/CommentService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as CommentValidator from '../validators/CommentValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = CommentValidator.get(req);
  const comments = await CommentService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(comments);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = CommentValidator.getById(req);
  const user = await CommentService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = CommentValidator.create(req);
  const newComment = await CommentService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newComment);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = CommentValidator.update(req);
  const updatedComment = await CommentService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedComment);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = CommentValidator.destroy(req);
  await CommentService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
