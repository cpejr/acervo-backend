import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import { FileSchema } from './FileModel.js';

const SponsorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: FileSchema,
  },
  { timestamps: true }
);

const SponsorModel = mongoose.model(TABLE_NAMES.SPONSOR, SponsorSchema);
export default SponsorModel;
