import mongoose from 'mongoose';

import CommentModel from './CommentModel.js';
import PostModel from './PostModel.js';
import RatingModel from './RatingModel.js';
import SavedPostModel from './SavedPostModel.js';

export const discriminatorKey = 'type';

const BaseUserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: String,
    },
    landline: {
      type: String,
    },
    contactChannel: {
      type: String,
      required: true,
    },
    zipCode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    number: {
      type: String,
    },
    complement: {
      type: String,
    },
    observations: {
      type: String,
      required: true,
    },
    emailVerified: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true, discriminatorKey }
);

BaseUserSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 60 * 15,
    partialFilterExpression: { emailVerified: false },
  }
); // After 15 minutes, if the user is not active, the document will be automatically deleted

// Delete all instances associated to that user
BaseUserSchema.pre(
  'deleteOne',
  { document: true, query: false }, // More details on https://mongoosejs.com/docs/api/schema.html#schema_Schema-pre
  async function (next) {
    await Promise.all([
      CommentModel.deleteMany({ user: this._id }).exec(),
      PostModel.deleteMany({ user: this._id }).exec(),
      RatingModel.deleteMany({ user: this._id }).exec(),
      SavedPostModel.deleteMany({ user: this._id }).exec(),
    ]);

    next();
  }
);

const BaseUserModel = mongoose.model('User', BaseUserSchema);
export default BaseUserModel;
