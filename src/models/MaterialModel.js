import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import FileSchema from '../utils/libs/mongoose/subdocuments/FilseSchema.js';

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

const MaterialModel = mongoose.model(TABLE_NAMES.MATERIAL, MaterialSchema);
export default MaterialModel;
