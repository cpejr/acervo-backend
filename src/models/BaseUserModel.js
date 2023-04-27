import mongoose from 'mongoose';

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

const BaseUserModel = mongoose.model('User', BaseUserSchema);
export default BaseUserModel;
