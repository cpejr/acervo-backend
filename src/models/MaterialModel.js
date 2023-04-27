import mongoose from 'mongoose';

import { FileSchema } from './FileModel.js';

export const discriminatorKey = 'type';

const MaterialSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    archive: FileSchema,
  },
  { discriminatorKey }
);

const MaterialModel = mongoose.model('Material', MaterialSchema);
export default MaterialModel;
