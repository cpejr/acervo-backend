import mongoose from 'mongoose';

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

const SponsorModel = mongoose.model('Sponsor', SponsorSchema);
export default SponsorModel;
