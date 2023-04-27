import { NotFoundError } from '../errors/baseErrors.js';
import EventModel from '../models/EventModel.js';

export async function get(inputFilters) {
  return EventModel.find(inputFilters).lean().exec();
}

export async function getById(_id) {
  const foundEvent = await EventModel.findById(_id).lean().exec();
  if (!foundEvent) throw new NotFoundError('Event not found');

  return foundEvent;
}

export async function create(inputData) {
  const newEvent = await EventModel.create(inputData);

  return newEvent;
}

export async function update({ _id, inputData }) {
  const foundEvent = await EventModel.findById(_id).exec();
  if (!foundEvent) throw new NotFoundError('Event not found');

  return foundEvent.set(inputData).save();
}

export async function destroy(_id) {
  const foundEvent = await EventModel.findById(_id).exec();
  if (!foundEvent) throw new NotFoundError('Event not found');

  await foundEvent.deleteOne();
}
