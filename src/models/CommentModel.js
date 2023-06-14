import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';

const CommentSchema = new mongoose.Schema(
  {
    post: {
      type: mongoose.Types.ObjectId,
      ref: TABLE_NAMES.POST,
      required: true,
    },
    user: {
      type: String,
      ref: TABLE_NAMES.USER,
      required: true,
    },
    repliedTo: {
      type: mongoose.Types.ObjectId,
      ref: TABLE_NAMES.REPLIED_TO,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const CommentModel = mongoose.model(TABLE_NAMES.COMMENT, CommentSchema);
export default CommentModel;
