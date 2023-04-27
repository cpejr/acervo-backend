import { z } from 'zod';

import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

// eslint-disable-next-line import/prefer-default-export
export const download = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('File _id'),
    }),
  })
);
