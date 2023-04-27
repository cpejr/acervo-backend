import { NotFoundError } from '../errors/baseErrors.js';
import SponsorModel from '../models/SponsorModel.js';

export async function get(inputFilters) {
  return SponsorModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundSponsor = await SponsorModel.findById(_id).lean().exec();
  if (!foundSponsor) throw new NotFoundError('Sponsor not found');

  return foundSponsor;
}

export async function create(inputData) {
  const newSponsor = await SponsorModel.create(inputData);

  return newSponsor;
}

export async function update({ _id, inputData }) {
  const foundSponsor = await SponsorModel.findById(_id).exec();
  if (!foundSponsor) throw new NotFoundError('Sponsor not found');

  return foundSponsor.set(inputData).save();
}

export async function destroy(_id) {
  const foundSponsor = await SponsorModel.findById(_id).exec();
  if (!foundSponsor) throw new NotFoundError('Sponsor not found');

  await foundSponsor.deleteOne();
}
