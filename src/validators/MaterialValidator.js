import { z } from 'zod';

import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z.object({
      _id: objectIdSchema('Material _id').optional(),
      authorName: z.string().optional(),
      title: z.string().optional(),
      subtitle: z.string().optional(),
      content: z.string().optional(),
      archive: z
        .object({
          _id: objectIdSchema('File _id').optional(),
          name: z.string().optional(),
          size: z.number().optional(),
          key: z.string().optional(),
          mimeType: z.string().optional(),
          url: z.string().optional(),
        })
        .optional(),

      category: z.string().optional(),
    }),
  })
);

export const getById = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Material _id'),
    }),
  })
);

export const create = validate(
  z.object({
    body: z.object({
      authorName: z
        .string({ required_error: 'Author name is required' })
        .min(3, 'Author name must be atleast 3 characters')
        .max(50, 'Author name must be a maximum of 50 characters'),
      title: z
        .string({ required_error: 'Title is required' })
        .min(3, 'Title must be atleast 3 characters')
        .max(50, 'Title must be a maximum of 50 characters'),
      subtitle: z
        .string()
        .min(3, 'Subtitle must be atleast 3 characters')
        .max(50, 'Subtitle must be a maximum of 50 characters')
        .optional(),
      content: z
        .string({ required_error: 'Content is required' })
        .min(3, 'Content must be atleast 3 characters'),
      archive: z.object(
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
        { required_error: 'Archive is required' }
      ),

      category: z.string({ required_error: 'Category is required' }),
    }),
  })
);

export const update = validate(
  z.object({
    body: z.object({
      authorName: z
        .string()
        .min(3, 'Author name must be atleast 3 characters')
        .max(50, 'Author name must be a maximum of 50 characters')
        .optional(),
      title: z
        .string()
        .min(3, 'Title must be atleast 3 characters')
        .max(50, 'Title must be a maximum of 50 characters')
        .optional(),
      subtitle: z
        .string()
        .min(3, 'Subtitle must be atleast 3 characters')
        .max(50, 'Subtitle must be a maximum of 50 characters')
        .optional(),
      content: z
        .string()
        .min(3, 'Content must be atleast 3 characters')
        .optional(),
      archive: z
        .object({
          name: z
            .string()
            .min(3, 'File name must be atleast 3 characters')
            .max(50, 'File name must be a maximum of 50 characters')
            .optional(),
          size: z
            .number()
            .min(1, 'Sizem must be atleast 1 character')
            .optional(),
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
        })
        .optional(),

      category: z.string().optional(),
    }),
    params: z.object({
      _id: objectIdSchema('Material _id'),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Material _id'),
    }),
  })
);
