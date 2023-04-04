import crypto from 'node:crypto';

import multer from 'multer';
import multerS3 from 'multer-s3';

import { BadRequest } from '../errors/baseErrors.js';
import numToMegaBytes from '../utils/general/numToMegaBytes.js';
import s3 from './S3/awsS3.js';

export default function createUploaderMiddleware({
  bucket = process.env.AWS_BUCKET_NAME,
  acl = 'public-read',
  allowedMimes,
  sizeLimitInMB,
  fields,
}) {
  const metadata = (req, file, cb) => cb(null, file);

  const storage = multerS3({
    s3,
    bucket,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl,
    metadata,
    key: (req, file, cb) => {
      const bytesNumber = 16;
      crypto.randomBytes(bytesNumber, (err, hash) => {
        if (err) cb(err);

        const key = `${hash.toString('hex')}-${file.originalname}`;
        cb(null, `iztweb/${key}`);
      });
    },
  });

  const fileFilter = (req, file, cb) => {
    const mimeTypeIsValid = allowedMimes.includes(file.mimetype);

    if (!mimeTypeIsValid)
      return cb(new BadRequest(`${file.fieldname} mime type is invalid`));

    return cb(null, true);
  };

  return multer({
    storage,
    limits: { fileSize: numToMegaBytes(sizeLimitInMB) },
    fileFilter,
  }).fields(fields);
}
