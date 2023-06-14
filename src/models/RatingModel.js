import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';

const RatingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: TABLE_NAMES.USER,
      required: true,
    },
    product: {
      type: mongoose.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    value: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      required: true,
    },
  },
  { timestamps: true }
);

const RatingModel = mongoose.model(TABLE_NAMES.RATING, RatingSchema);
export default RatingModel;
