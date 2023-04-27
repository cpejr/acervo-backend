import * as PhysicalPersonService from '../services/PhysicalPersonService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as PhysicalPersonValidator from '../validators/PhysicalPersonValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = PhysicalPersonValidator.get(req);
  const users = await PhysicalPersonService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(users);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = PhysicalPersonValidator.getById(req);
  const user = await PhysicalPersonService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = PhysicalPersonValidator.create(req);
  const newUser = await PhysicalPersonService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newUser);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = PhysicalPersonValidator.update(req);
  const updatedUser = await PhysicalPersonService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedUser);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = PhysicalPersonValidator.destroy(req);
  await PhysicalPersonService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
