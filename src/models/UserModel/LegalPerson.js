import mongoose from 'mongoose';

import BaseUserModel, { discriminatorKey } from './BaseUserModel.js';

const LegalPersonModel = BaseUserModel.discriminator(
  'LegalPerson',
  new mongoose.Schema(
    { cnpj: { type: String, required: true } },
    { discriminatorKey }
  )
);
export default LegalPersonModel;
