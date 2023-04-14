import { z } from 'zod';

import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z.object({
      _id: objectIdSchema('Product _id').optional(),
      name: z.string().optional(),
      description: z.string().optional(),
      price: z.string().optional(),

      image: z
        .object({
          _id: objectIdSchema('Image _id').optional(),
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
      _id: objectIdSchema('Product _id'),
    }),
  })
);

export const create = validate(
  z.object({
    body: z.object({
      name: z
        .string({ required_error: 'Name is required' })
        .min(2, 'Name must be atleast 2 characters')
        .max(50, 'Name must be a maximum of 50 characters'),
      description: z
        .string({ required_error: 'Description is required' })
        .min(3, 'Description must be atleast 3 characters')
        .max(300, 'Description must be a maximum of 300 characters'),

      price: z
        .number({ required_error: 'Price is required' })
        .gte(1, 'Price must be atleast 1 real')
        .lte(1000, 'Price must be a maximum of 1000 reals'),
      image: z.object(
        {
          name: z
            .string({ required_error: 'Image  name is required' })
            .min(3, 'Image name must be atleast 3 characters')
            .max(50, 'Image name must be a maximum of 50 characters'),
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
        .min(2, 'Name must be atleast 2 characters')
        .max(50, 'Name must be a maximum of 50 characters')
        .optional(),
      description: z
        .string()
        .min(3, 'Description must be atleast 3 characters')
        .max(300, 'Description must be a maximum of 300 characters')
        .optional(),

      price: z
        .number()
        .gte(1, 'Price must be atleast 1 real')
        .lte(1000, 'Price must be a maximum of 1000 reals')
        .optional(),
      image: z.object({
        name: z
          .string()
          .min(3, 'Image name must be atleast 3 characters')
          .max(50, 'Image name must be a maximum of 50 characters')
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
      _id: objectIdSchema('Product _id'),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Product _id'),
    }),
  })
);
