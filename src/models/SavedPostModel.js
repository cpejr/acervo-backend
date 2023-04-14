import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';

const SavedPostSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Types.ObjectId,
      ref: TABLE_NAMES.POST,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: TABLE_NAMES.USER,
      required: true,
    },
  },
  { timestamps: true }
);

const SavedPostModel = mongoose.model('SavedPost', SavedPostSchema);
export default SavedPostModel;
