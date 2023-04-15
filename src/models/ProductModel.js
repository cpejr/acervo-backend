import mongoose from 'mongoose';

import * as awsS3 from '../config/S3/awsS3.js';
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

// Delete files in S3
ProductSchema.pre(
  'deleteOne',
  { document: true, query: false }, // More details on https://mongoosejs.com/docs/api/schema.html#schema_Schema-pre
  async function () {
    return awsS3.deleteFile(this.image.key);
  }
);
ProductSchema.pre('deleteMany', async function () {
  const deletedProducts = await this.model.find(this.getFilter()).lean().exec(); // More details on https://github.com/Automattic/mongoose/issues/9152#issuecomment-714522364

  const keys = deletedProducts.map(({ image }) => image.key);
  return awsS3.deleteFiles(keys);
});

const ProductModel = mongoose.model('Product', ProductSchema);
export default ProductModel;
