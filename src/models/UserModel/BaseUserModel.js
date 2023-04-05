import mongoose from 'mongoose';

export const discriminatorKey = 'type';

const BaseUserSchema = new mongoose.Schema(
  {
    name: String,
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
