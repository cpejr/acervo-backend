import mongoose from 'mongoose';

// import * as awsS3 from '../config/S3/awsS3.js';
import { S3RVER_ENDPOINT } from '../config/S3/s3rver.js';
// import { TABLE_NAMES } from '../utils/general/constants.js';
import isDevEnvironment from '../utils/general/isDevEnvironment.js';

// eslint-disable-next-line import/prefer-default-export
export const FileSchema = new mongoose.Schema(
  {
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
    key: {
      type: String,
      required: true,
      unique: true,
      sparse: true,
    },
    mimeType: {
      type: String,
      required: true,
    },
    url: String,
  },
  { versionKey: false, _id: false }
);

FileSchema.pre('save', function (next) {
  if (isDevEnvironment) {
    this.url = `${S3RVER_ENDPOINT}/${process.env.AWS_BUCKET_NAME}/${this.key}`;
  }
  next();
});
// FileSchema.pre('insertMany', function (next, docs) {
//   docs.forEach((doc) => {
//     if (isDevEnvironment) {
//       // eslint-disable-next-line no-param-reassign
//       doc.url = `${S3RVER_ENDPOINT}/${process.env.AWS_BUCKET_NAME}/${doc.key}`;
//     }
//   });
//   next();
// });

// FileSchema.pre(
//   'deleteOne',
//   { document: true, query: false }, // More details on https://mongoosejs.com/docs/api/schema.html#schema_Schema-pre
//   async function (next) {
//     await awsS3.deleteFile(this.key);
//     next();
//   }
// );
// FileSchema.pre('deleteMany', async function (next) {
//   const deletedFiles = await this.model.find(this.getFilter()).lean().exec(); // More details on https://github.com/Automattic/mongoose/issues/9152#issuecomment-714522364
//   const keys = deletedFiles.map(({ key }) => key);

//   await awsS3.deleteFiles(keys);
//   next();
// });

// const FileModel = mongoose.model(TABLE_NAMES.FILE, FileSchema);
// export default FileModel;
