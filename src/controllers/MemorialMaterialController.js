import * as MemorialMaterialService from '../services/MemorialMaterialService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as MaterialValidator from '../validators/MaterialValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = MaterialValidator.get(req);
  const users = await MemorialMaterialService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(users);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = MaterialValidator.getById(req);
  const user = await MemorialMaterialService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = MaterialValidator.create(req);
  const newUser = await MemorialMaterialService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newUser);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = MaterialValidator.update(req);
  const updatedUser = await MemorialMaterialService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedUser);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = MaterialValidator.destroy(req);
  await MemorialMaterialService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
