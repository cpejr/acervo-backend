import { z } from 'zod';

import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z.object({
      __id: objectIdSchema('Sponsor _id').optional(),
      name: z.string().optional(),
      image: z
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
      _id: objectIdSchema('Sponsor _id'),
    }),
  })
);

export const create = validate(
  z.object({
    body: z.object({
      name: z
        .string({ required_error: 'File  name is required' })
        .min(3, 'File name must be atleast 3 characters')
        .max(50, 'File name must be a maximum of 50 characters'),
      image: z.object(
        {
          name: z
            .string({ required_error: 'File  name is required' })
            .min(3, 'File name must be atleast 3 characters')
            .max(50, 'File name must be a maximum of 50 characters'),
          size: z
            .number({ required_error: 'Size is required' })
            .min(1, 'Sizem must be atleast 1 character'),
          key: z
            .string({ required_error: 'Key is required' })
            .min(3, 'Key must be atleast 3 characters')
            .max(50, 'Key must be a maximum of 50 characters'),
          mimeType: z
            .string({ required_error: 'Mime Type is required' })
            .min(3, 'Mime Type must be atleast 3 characters')
            .max(50, 'Mime Type must be a maximum of 50 characters'),
          url: z
            .string({ required_error: 'Url is required' })
            .min(3, 'Url must be atleast 3 characters')
            .max(500, 'Url must be a maximum of 500 characters'),
        },
        { required_error: 'Image is required' }
      ),
    }),
  })
);

export const update = validate(
  z.object({
    body: z.object({
      name: z
        .string()
        .min(3, 'File name must be atleast 3 characters')
        .max(50, 'File name must be a maximum of 50 characters'),
      image: z.object({
        name: z
          .string()
          .min(3, 'File name must be atleast 3 characters')
          .max(50, 'File name must be a maximum of 50 characters'),
        size: z.number().min(1, 'Sizem must be atleast 1 character'),
        key: z
          .string()
          .min(3, 'Key must be atleast 3 characters')
          .max(50, 'Key must be a maximum of 50 characters'),
        mimeType: z
          .string()
          .min(3, 'Mime Type must be atleast 3 characters')
          .max(50, 'Mime Type must be a maximum of 50 characters'),
        url: z
          .string()
          .min(3, 'Url must be atleast 3 characters')
          .max(500, 'Url must be a maximum of 500 characters'),
      }),
    }),
    params: z.object({
      _id: objectIdSchema('Sponsor _id'),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Sponsor _id'),
    }),
  })
);
