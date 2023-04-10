import mongoose from 'mongoose';

import BaseUserModel, { discriminatorKey } from './BaseUserModel.js';

const PhysicalPersonModel = BaseUserModel.discriminator(
  'PhysicalPerson',
  new mongoose.Schema({
    cpf: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['administrador', 'estudante', 'padrao'],
      default: 'padrao',
    },
    birthday: {
      type: Date,
      required: true,
    },
    profession: {
      type: String,
      required: true,
    },
    discriminatorKey,
  })
);
export default PhysicalPersonModel;
