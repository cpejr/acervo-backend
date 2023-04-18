import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import BaseUserModel, { discriminatorKey } from './BaseUserModel.js';

const PhysicalPersonModel = BaseUserModel.discriminator(
  TABLE_NAMES.PHYSICAL_PERSON,
  new mongoose.Schema(
    {
      cpf: {
        type: String,
        required: true,
        unique: true,
      },
      personType: {
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
    },
    { discriminatorKey }
  )
);
export default PhysicalPersonModel;
