import * as SponsorService from '../services/SponsorService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as SponsorValidator from '../validators/SponsorValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = SponsorValidator.get(req);
  const sponsors = await SponsorService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(sponsors);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = SponsorValidator.getById(req);
  const user = await SponsorService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = SponsorValidator.create(req);
  const newSponsor = await SponsorService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newSponsor);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = SponsorValidator.update(req);
  const updatedSponsor = await SponsorService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedSponsor);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = SponsorValidator.destroy(req);
  await SponsorService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
