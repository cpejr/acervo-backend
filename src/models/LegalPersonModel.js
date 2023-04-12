import mongoose from 'mongoose';

import BaseUserModel, { discriminatorKey } from './BaseUserModel.js';

const LegalPersonModel = BaseUserModel.discriminator(
  'LegalPerson',
  new mongoose.Schema(
    {
      cnpj: { type: String, required: true },

      contactPersonName: { type: String, required: true, trim: true },

      department: { type: String, required: true },

      office: { type: String, required: true },

      site: { type: String, required: true },

      employeesNumber: { type: String, required: true },

      fantasyName: { type: String, required: true, unique: true },

      corporateName: { type: String, required: true },

      stateRegistration: { type: String, required: true, unique: true },

      municipalRegistration: { type: String, required: true, unique: true },

      economicActivity: { type: String, required: true },

      foundingDate: { type: Date, required: true },
    },
    { discriminatorKey }
  )
);
export default LegalPersonModel;
