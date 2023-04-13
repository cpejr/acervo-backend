import { NotFoundError } from '../errors/baseErrors.js';
import AdvertisementModel from '../models/AdvertisementModel.js';

export async function get(inputFilters) {
  return AdvertisementModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundAdvertisement = await AdvertisementModel.findById(_id)
    .lean()
    .exec();
  if (!foundAdvertisement) throw new NotFoundError('Advertisement not found');

  return foundAdvertisement;
}

export async function create(inputData) {
  const newAdvertisement = await AdvertisementModel.create(inputData);

  return newAdvertisement;
}

export async function update({ _id, inputData }) {
  const foundAdvertisement = await AdvertisementModel.findById(_id).exec();
  if (!foundAdvertisement) throw new NotFoundError('Advertisement not found');

  return foundAdvertisement.set(inputData).save();
}

export async function destroy(_id) {
  const foundAdvertisement = await AdvertisementModel.findById(_id).exec();
  if (!foundAdvertisement) throw new NotFoundError('Advertisement not found');

  await foundAdvertisement.deleteOne();
}
