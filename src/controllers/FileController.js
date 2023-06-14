import * as FileService from '../services/FileService.js';
import asyncHandler from '../utils/general/asyncHandler.js';
import { SUCCESS_CODES } from '../utils/general/constants.js';
import * as FileValidator from '../validators/FileValidator.js';

// eslint-disable-next-line import/prefer-default-export
export const download = asyncHandler(async (req, res) => {
  const { _id } = FileValidator.download(req);
  const { fileName, dataStream, contentType, contentLength } =
    await FileService.getFile(_id);

  res
    .attachment(fileName)
    .type(contentType)
    .status(SUCCESS_CODES.OK)
    .set({ 'Content-Length': contentLength });
  dataStream.pipe(res);
});
