import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';

import { FileSchema } from './FileModel.js';

const PostSchema = new mongoose.Schema(
  {
    user: {
        type: mongoose.Types,
        ref: TABLE_NAMES.USER,
        required: true,
    },
    theme: {
        type: String,
        enum: [
          'Tema 1',
          'Tema 2',
          'Tema 3',
          'Tema 4',
          'Tema 5',
        ],
        requuired: true,
      },
    content: {
      type: String,
      required: true,
    },
    multimedia: FileSchema,
  },
  { timestamps: true }
);

const PostModel = mongoose.model('Post', PostSchema);
export default PostModel;
