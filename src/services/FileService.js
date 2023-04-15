// import * as awsS3 from '../config/S3/awsS3.js';
// import { NotFoundError } from '../errors/baseErrors.js';
// import FileModel from '../models/FileModel.js';

// // eslint-disable-next-line import/prefer-default-export
// export async function getFile(_id) {
//   const foundFile = await FileModel.findById(_id).lean().exec();
//   if (!foundFile) throw new NotFoundError('File not found');

//   const {
//     Body: dataStream,
//     ContentType: contentType,
//     ContentLength: contentLength,
//   } = await awsS3.getFile(foundFile.key);

//   return { fileName: foundFile.name, dataStream, contentType, contentLength };
// }
