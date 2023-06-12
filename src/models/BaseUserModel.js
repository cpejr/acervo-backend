import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import { hashPassword } from '../utils/libs/bcrypt.js';
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
    password: {
      type: String,
      required: true,
      select: false,
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

BaseUserSchema.pre('save', async function (next) {
  // only hash the password if it has been modified or it is new
  if (this.isModified('password')) {
    this.password = await hashPassword(this.password);
  }

  next();
});

// Delete all instances associated to that user
BaseUserSchema.pre(
  'deleteOne',
  { document: true, query: false }, // More details on https://mongoosejs.com/docs/api/schema.html#schema_Schema-pre
  async function () {
    return Promise.all([
      CommentModel.deleteMany({ user: this._id }).exec(),
      PostModel.deleteMany({ user: this._id }).exec(),
      RatingModel.deleteMany({ user: this._id }).exec(),
      SavedPostModel.deleteMany({ user: this._id }).exec(),
    ]);
  }
);

const BaseUserModel = mongoose.model(TABLE_NAMES.USER, BaseUserSchema);
export default BaseUserModel;
