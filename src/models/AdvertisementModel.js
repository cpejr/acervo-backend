import mongoose from 'mongoose';

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

const AdvertisementModel = mongoose.model('Advertisement', AdvertisementSchema);
export default AdvertisementModel;
