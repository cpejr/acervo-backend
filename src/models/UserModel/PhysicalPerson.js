import mongoose from 'mongoose';

import BaseUserModel, { discriminatorKey } from './BaseUserModel.js';

const PhysicalPersonModel = BaseUserModel.discriminator(
  'PhysicalPerson',
  new mongoose.Schema(
    { cpf: { type: String, required: true } },
    { discriminatorKey }
  )
);
export default PhysicalPersonModel;
