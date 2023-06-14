import { z } from 'zod';

import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z.object({
      _id: objectIdSchema('SavedPost _id').optional(),
      post: objectIdSchema('SavedPost _post').optional(),
      user: objectIdSchema('SavedPost _user').optional(),
    }),
  })
);

export const getById = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('SavedPost _id'),
    }),
  })
);

export const create = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('SavedPost _id'),
    }),
  })
);

export const update = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('SavedPost _id'),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('SavedPost _id'),
    }),
  })
);
