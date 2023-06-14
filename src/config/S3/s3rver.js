import path from 'node:path';

import S3rver from 's3rver';

import { InternalServerError } from '../../errors/baseErrors.js';
import fileDirName from '../../utils/general/fileDirName.js';
import logger from '../logger.js';

const { __dirname } = fileDirName(import.meta.url);

const PORT = 4568;
const ADDRESS = 'localhost';
export const S3RVER_ENDPOINT = `http://${ADDRESS}:${PORT}`;

export default function s3rverConfig() {
  return new Promise((resolve, reject) => {
    const instance = new S3rver({
      port: PORT,
      address: ADDRESS,
      silent: false,
      directory: path.resolve(__dirname, '../../../temp/uploads'),
      configureBuckets: [
        {
          name: process.env.AWS_BUCKET_NAME,
        },
      ],
    });

    instance.run((error, { address, port } = {}) => {
      if (error) {
        const err = new InternalServerError(
          `❌ Failed to connect to S3rver. Error: ${error}.`
        );
        reject(err);
      } else {
        logger.info(
          `✅ Established connection with S3rver at address ${address} and port ${port}`
        );
        resolve();
      }
    });
  });
}
