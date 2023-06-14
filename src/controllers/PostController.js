import * as PostService from '../services/PostService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as PostValidator from '../validators/PostValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = PostValidator.get(req);
  const posts = await PostService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(posts);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = PostValidator.getById(req);
  const user = await PostService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = PostValidator.create(req);
  const newPost = await PostService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newPost);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = PostValidator.update(req);
  const updatedPost = await PostService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedPost);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = PostValidator.destroy(req);
  await PostService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
