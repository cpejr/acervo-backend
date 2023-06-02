import { NotFoundError } from '../errors/baseErrors.js';
import MemorialMaterialModel from '../models/MemorialMaterialModel.js';

export async function get(inputFilters) {
  return MemorialMaterialModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundMaterial = await MemorialMaterialModel.findById(_id).lean().exec();
  if (!foundMaterial) throw new NotFoundError('Material not found');

  return foundMaterial;
}

export async function create(inputData) {
  const newMaterial = await MemorialMaterialModel.create(inputData);
  return newMaterial;
}

export async function update({ _id, inputData }) {
  const foundMaterial = await MemorialMaterialModel.findById(_id).exec();
  if (!foundMaterial) throw new NotFoundError('Material not found');

  return foundMaterial.set(inputData).save();
}

export async function destroy(_id) {
  const foundMaterial = await MemorialMaterialModel.findById(_id).exec();
  if (!foundMaterial) throw new NotFoundError('Material not found');

  await foundMaterial.deleteOne();
}