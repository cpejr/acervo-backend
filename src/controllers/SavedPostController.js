import * as SavedPostService from '../services/SavedPostService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as SavedPostValidator from '../validators/SavedPostValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = SavedPostValidator.get(req);
  const SavedPosts = await SavedPostService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(SavedPosts);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = SavedPostValidator.getById(req);
  const savedPosts = await SavedPostService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(savedPosts);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = SavedPostValidator.create(req);
  const newSavedPost = await SavedPostService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newSavedPost);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = SavedPostValidator.update(req);
  const updatedSavedPost = await SavedPostService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedSavedPost);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = SavedPostValidator.destroy(req);
  await SavedPostService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
