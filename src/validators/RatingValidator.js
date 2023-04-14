import { z } from 'zod';

import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z.object({
      _id: objectIdSchema('Rating _id').optional(),
      user: objectIdSchema('Rating _user').optional(),
      product: objectIdSchema('Rating _product').optional(),
      value: z.number().optional(),
    }),
  })
);

export const getById = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Rating _id'),
    }),
  })
);

export const getByUser = validate(
    z.object({
      params: z.object({
        product: objectIdSchema('Rating _user'),
      }),
    })
  );

export const getByProduct = validate(
    z.object({
      params: z.object({
        product: objectIdSchema('Rating _product'),
      }),
    })
  );

export const create = validate(
  z.object({
    body: z.object({
      value: z
        .number({ required_error: 'Rating value is required' })
        .gte(1, 'Rating value must be atleast 1 characters')
        .lte(5, 'Rating value must be a maximum of 5 characters'),
    }),
  })
);

export const update = validate(
 z.object({
    body: z.object({
      value: z
        .number()
        .gte(1, 'Rating value must be atleast 1 characters')
        .lte(5, 'Rating value must be a maximum of 5 characters'),
    }),
    params: z.object({
        _id: objectIdSchema('Rating _id'),
    }),
    params: z.object({
        user: objectIdSchema('Rating _user'),
    }),
    params: z.object({
        product: objectIdSchema('Rating _product'),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('Rating _id'),
    }),
  })
);
