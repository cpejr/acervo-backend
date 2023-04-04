import mongoose from 'mongoose';
import { z } from 'zod';

const objectIdSchema = (fieldName) =>
  z.custom(
    (data) => mongoose.Types.ObjectId.isValid(data),
    `${fieldName} field is not a valid Object ID`
  );

export default objectIdSchema;
