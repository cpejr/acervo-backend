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

export const getByUser = validate(
    z.object({
      params: z.object({
        product: objectIdSchema('SavedPost _user'),
      }),
    })
  );

export const getByProduct = validate(
    z.object({
      params: z.object({
        product: objectIdSchema('SavedPost _product'),
      }),
    })
  );

export const update = validate(
 z.object({
    params: z.object({
        _id: objectIdSchema('SavedPost _id'),
    }),
    params: z.object({
        user: objectIdSchema('SavedPost _user'),
    }),
    params: z.object({
        product: objectIdSchema('SavedPost _product'),
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
