import mongoose from 'mongoose';

import { S3RVER_ENDPOINT } from '../../../config/S3/s3rver.js';
import isDevEnvironment from '../../general/isDevEnvironment.js';
import { positiveInteger } from './validators.js';

const FileSchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    size: {
      type: Number,
      required: true,
      min: [0, 'File size cannot be less than 0 bytes'],
    },
    mimeType: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    orderPosition: {
      type: Number,
      min: [0, 'File order position cannot be negative'],
      validate: [positiveInteger],
    },
  },
  { versionKey: false, _id: false }
);

FileSchema.pre('save', function (next) {
  if (isDevEnvironment) {
    this.url = `${S3RVER_ENDPOINT}/${process.env.AWS_BUCKET_NAME}/${this.key}`;
  }
  next();
});

export default FileSchema;
