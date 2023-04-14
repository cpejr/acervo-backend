import * as ProductService from '../services/ProductService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as ProductValidator from '../validators/ProductValidator.js';

export const get = asyncHandler(async (req, res) => {
  const inputFilters = ProductValidator.get(req);
  const products = await ProductService.get(inputFilters);

  res.status(SUCCESS_CODES.OK).json(products);
});

export const getById = asyncHandler(async (req, res) => {
  const { _id } = ProductValidator.getById(req);
  const user = await ProductService.getById(_id);

  res.status(SUCCESS_CODES.OK).json(user);
});

export const create = asyncHandler(async (req, res) => {
  const inputData = ProductValidator.create(req);
  const newProduct = await ProductService.create(inputData);

  res.status(SUCCESS_CODES.CREATED).json(newProduct);
});

export const update = asyncHandler(async (req, res) => {
  const { _id, ...inputData } = ProductValidator.update(req);
  const updatedProduct = await ProductService.update({ _id, inputData });

  res.status(SUCCESS_CODES.OK).json(updatedProduct);
});

export const destroy = asyncHandler(async (req, res) => {
  const { _id } = ProductValidator.destroy(req);
  await ProductService.destroy(_id);

  res.sendStatus(SUCCESS_CODES.NO_CONTENT);
});
