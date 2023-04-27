import * as DidacticMaterialService from '../services/DidacticMaterialService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as MaterialValidator from '../validators/MaterialValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = MaterialValidator.get(req);
  const users = await DidacticMaterialService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(users);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = MaterialValidator.getById(req);
  const user = await DidacticMaterialService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = MaterialValidator.create(req);
  const newUser = await DidacticMaterialService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newUser);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = MaterialValidator.update(req);
  const updatedUser = await DidacticMaterialService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedUser);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = MaterialValidator.destroy(req);
  await DidacticMaterialService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
