import {
  DeleteObjectCommand,
  DeleteObjectsCommand,
  GetBucketCorsCommand,
  GetObjectCommand,
  PutBucketCorsCommand,
  PutObjectCommand,
  S3Client,
} from '@aws-sdk/client-s3';

import isDevEnvironment from '../../utils/general/isDevEnvironment.js';
import randomFileName from '../../utils/general/ramdomFileName.js';
import { S3RVER_ENDPOINT } from './s3rver.js';

const s3 = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
  ...(isDevEnvironment && { endpoint: S3RVER_ENDPOINT }),
});

export async function getFile(key) {
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  return s3.send(new GetObjectCommand(params));
}

export async function uploadFile({ file, ACL }) {
  const key = randomFileName(file.name);
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Body: file.buffer,
    Key: key,
    ContentType: file.mimeType,
    ACL,
  };

  await s3.send(new PutObjectCommand(params));
  return { key, ...file };
}

export async function uploadFiles({ files, ACL }) {
  return Promise.all(files.map(async (file) => uploadFile({ file, ACL })));
}

export async function deleteFile(key) {
  if (!key) return;

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  await s3.send(new DeleteObjectCommand(params));
}

export async function deleteFiles(keys) {
  if (!keys.length) return;

  const objects = keys.map((key) => ({
    Key: key,
  }));

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Delete: {
      Objects: objects,
    },
  };

  await s3.send(new DeleteObjectsCommand(params));
}

export async function getCors() {
  const bucketParams = { Bucket: process.env.AWS_BUCKET_NAME };
  return s3.send(new GetBucketCorsCommand(bucketParams));
}

export async function configCors({
  allowedOrigins = ['*'],
  allowedMethods = ['POST', 'GET', 'PUT', 'DELETE', 'HEAD'],
  exposeHeaders = [],
  maxAgeSeconds = 3000,
} = {}) {
  const config = {
    AllowedHeaders: ['Authorization', 'Content-Type'],
    AllowedMethods: allowedMethods,
    AllowedOrigins: allowedOrigins,
    ExposeHeaders: exposeHeaders,
    MaxAgeSeconds: maxAgeSeconds,
  };

  const corsParams = {
    Bucket: process.env.AWS_BUCKET_NAME,
    CORSConfiguration: { CORSRules: new Array(config) },
  };

  return s3.send(new PutBucketCorsCommand(corsParams));
}

export default s3;
