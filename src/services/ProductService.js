import { NotFoundError } from '../errors/baseErrors.js';
import ProductModel from '../models/ProductModel.js';

export async function get(inputFilters) {
  return ProductModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundProduct = await ProductModel.findById(_id).lean().exec();
  if (!foundProduct) throw new NotFoundError('Product not found');

  return foundProduct;
}

export async function create(inputData) {
  const newProduct = await ProductModel.create(inputData);

  return newProduct;
}

export async function update({ _id, inputData }) {
  const foundProduct = await ProductModel.findById(_id).exec();
  if (!foundProduct) throw new NotFoundError('Product not found');

  return foundProduct.set(inputData).save();
}

export async function destroy(_id) {
  const foundProduct = await ProductModel.findById(_id).exec();
  if (!foundProduct) throw new NotFoundError('Product not found');

  await foundProduct.deleteOne();
}
