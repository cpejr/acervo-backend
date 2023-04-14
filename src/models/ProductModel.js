import mongoose from 'mongoose';

import { FileSchema } from './FileModel.js';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: FileSchema,
  },
  { timestamps: true }
);

const ProductModel = mongoose.model('Product', ProductSchema);
export default ProductModel;
