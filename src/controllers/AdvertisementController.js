import * as AdvertisementService from '../services/AdvertisementService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as AdvertisementValidator from '../validators/AdvertisementValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = AdvertisementValidator.get(req);
  const adds = await AdvertisementService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(adds);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = AdvertisementValidator.getById(req);
  const user = await AdvertisementService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = AdvertisementValidator.create(req);
  const newAdvertisement = await AdvertisementService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newAdvertisement);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = AdvertisementValidator.update(req);
  const updatedAdvertisement = await AdvertisementService.update({
    _id,
    inputData,
  });

  res.status(SUCCESS_CODES.OK).json(updatedAdvertisement);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = AdvertisementValidator.destroy(req);
  await AdvertisementService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
