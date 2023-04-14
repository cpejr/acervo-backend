import * as RatingService from '../services/RatingService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as RatingValidator from '../validators/RatingValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = RatingValidator.get(req);
  const Ratings = await RatingService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(Ratings);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = RatingValidator.getById(req);
  const ratings = await RatingService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(ratings);
});

export const getByUser = asyncHandler(async (req, res) => {
  const { user } = RatingValidator.getByUser(req);
  const ratings = await RatingService.getByUser(user);

  res.status(SUCCESS_CODES.OK).json(ratings);
});

export const getByProduct = asyncHandler(async (req, res) => {
  const { product } = RatingValidator.getByProduct(req);
  const ratings = await RatingService.getByProduct(product);

  res.status(SUCCESS_CODES.OK).json(ratings);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = RatingValidator.create(req);
  const newRating = await RatingService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newRating);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, user, product, ...inputData } = RatingValidator.update(req);
  const updatedRating = await RatingService.update({
    _id,
    user,
    product,
    inputData,
  });

  res.status(SUCCESS_CODES.OK).json(updatedRating);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = RatingValidator.destroy(req);
  await RatingService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
