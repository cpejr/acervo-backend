import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';

const UserTokenSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: TABLE_NAMES.USER,
      required: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

UserTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

BaseUserSchema.index(
  { createdAt: 1 },
  {
    expireAfterSeconds: 60 * 15,
  }
); // After 15 minutes, if the user is not active, the document will be automatically deleted


const UserTokenModel = mongoose.model(TABLE_NAMES.USER_TOKEN, UserTokenSchema);
export default UserTokenModel;
