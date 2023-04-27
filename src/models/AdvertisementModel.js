import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import { FileSchema } from './FileModel.js';

const AdvertisementSchema = new mongoose.Schema(
  {
    ownerName: {
      type: String,
      required: true,
    },
    multimedia: FileSchema,
  },
  { timestamps: true }
);

const AdvertisementModel = mongoose.model(
  TABLE_NAMES.ADVERTISEMENT,
  AdvertisementSchema
);
export default AdvertisementModel;
