import { z } from 'zod';

import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z.object({
      _id: objectIdSchema('Comment _id').optional(),
      post: objectIdSchema('Comment post').optional(),
      user: z.string().optional(),
      repliedTo: objectIdSchema('Comment repliedTo').optional(),
      message: z.string().optional(),
    }),
  })
);

export const getById = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Comment _id'),
    }),
  })
);

export const create = validate(
  z.object({
    body: z.object({
      post: objectIdSchema('Post'),
      user: z.string({ required_error: 'User is required' }),
      repliedTo: objectIdSchema('repliedTo'),
      message: z
        .string({ required_error: 'Message is required'} )
        .min(3, 'Message must be atleast 3 characters')
        .max(1500, 'Message must be a maximum of 1500 characters'),
    }),
  })
);

export const update = validate(
  z.object({
    body: z.object({
        post: objectIdSchema('Post'),
        user: z.string().optional(),
        repliedTo: objectIdSchema('repliedTo'),
        message: z
          .string()
          .min(3, 'Message must be atleast 3 characters')
          .max(1500, 'Message must be a maximum of 1500 characters')
          .optional(),
      }),
    params: z.object({
      _id: objectIdSchema('Comment _id'),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Comment _id'),
    }),
  })
);
