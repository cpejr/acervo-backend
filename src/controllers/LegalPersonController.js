import * as EmailHandler from '../mail/handlers.js';
import * as LegalPersonService from '../services/LegalPersonService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import { pwdJwts } from '../utils/libs/jwt.js';
import * as LegalPersonValidator from '../validators/LegalPersonValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = LegalPersonValidator.get(req);
  const users = await LegalPersonService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(users);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = LegalPersonValidator.getById(req);
  const user = await LegalPersonService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = LegalPersonValidator.create(req);
  const newUser = await LegalPersonService.create(inputData);

  const token = pwdJwts(newUser._id);
  await EmailHandler.confirmEmail(token, newUser);

  res.status(SUCCESS_CODES.CREATED).json(newUser, token);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = LegalPersonValidator.update(req);
  const updatedUser = await LegalPersonService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedUser);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = LegalPersonValidator.destroy(req);
  await LegalPersonService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
