import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import BaseUserModel, { discriminatorKey } from './BaseUserModel.js';

const PHYSICAL_PERSON_TYPES = {
  ADMNISTRATOR: 'ADMINISTRADOR',
  STUDENT: 'ESTUDANTE',
  DEFAULT: 'PADRAO',
};

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
        enum: Object.values(PHYSICAL_PERSON_TYPES),
        default: PHYSICAL_PERSON_TYPES.DEFAULT,
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
