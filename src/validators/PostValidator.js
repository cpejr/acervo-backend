import { z } from 'zod';

import { multimediaSchema } from '../utils/libs/zod/fileSchemas.js';
import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z.object({
      _id: objectIdSchema('Post _id').optional(),
      user: z.string().optional(),
      theme: z.string().optional(),
      content: z.string().optional(),
      multimedia: z
        .object({
          _id: objectIdSchema('File _id').optional(),
          name: z.string().optional(),
          size: z.number().optional(),
          key: z.string().optional(),
          mimeType: z.string().optional(),
          url: z.string().optional(),
        })
        .optional(),
    }),
  })
);

export const getById = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Post _id'),
    }),
  })
);

export const create = validate(
  z.object({
    body: z.object({
      user: z.string({ required_error: 'User is required' }),
      theme: z
        .string({ required_error: 'Theme is required' })
        .min(3, 'Theme must be atleast 3 characters')
        .max(50, 'Theme must be a maximum of 50 characters'),
      content: z
        .string()
        .min(3, 'Content must be atleast 3 characters')
        .max(1500, 'Content must be a maximum of 1500 characters'),
      multimedia: z
        .array(multimediaSchema)
        .length(1, 'You can not post more than 1 file')
        .transform(([multimedia]) => multimedia),
    }),
  })
);

export const update = validate(
  z.object({
    body: z.object({
      user: z.string().optional(),
      theme: z
        .string()
        .min(3, 'Theme must be atleast 3 characters')
        .max(50, 'Theme must be a maximum of 50 characters')
        .optional(),
      content: z
        .string()
        .min(3, 'Content must be atleast 3 characters')
        .max(1500, 'Content must be a maximum of 1500 characters')
        .optional(),
      multimedia: z.object({
        name: z
          .string()
          .min(3, 'File name must be atleast 3 characters')
          .max(50, 'File name must be a maximum of 50 characters')
          .optional(),
        size: z.number().min(1, 'Size must be atleast 1 character').optional(),
        key: z
          .string()
          .min(3, 'Key must be atleast 3 characters')
          .max(50, 'Key must be a maximum of 50 characters')
          .optional(),
        mimeType: z
          .string()
          .min(3, 'Mime Type must be atleast 3 characters')
          .max(50, 'Mime Type must be a maximum of 50 characters')
          .optional(),
        url: z
          .string()
          .min(3, 'Url must be atleast 3 characters')
          .max(500, 'Url must be a maximum of 500 characters')
          .optional(),
      }),
    }),
    params: z.object({
      _id: objectIdSchema('Post _id'),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Post _id'),
    }),
  })
);
