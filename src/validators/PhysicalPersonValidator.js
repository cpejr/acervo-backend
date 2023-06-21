import { z } from 'zod';

import {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
} from '../utils/libs/zod/baseUserSchema.js';
import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z
      .object({
        personType: z.string().optional(),
        cpf: z.string().optional(),
        birthday: z.date().optional(),
        profession: z.string().optional(),
      })
      .merge(getUserSchema),
  })
);

export const getById = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('User _id'),
    }),
  })
);

export const create = validate(
  z.object({
    body: z
      .object({
        personType: z.string().default('padrao'),
        cpf: z
          .string({ required_error: 'User CPF is required' })
          .length(11, 'CPF must be exactly 14 characters long'),
        birthday: z.coerce.date({
          required_error: 'User birthday is required',
        }),
        profession: z
          .string({ required_error: 'Profession is required' })
          .min(1, 'Profession must be atleast 1 characters')
          .max(50, 'Profession must be a maximum of 50 characters'),
      })
      .merge(createUserSchema),
  })
);

export const verifyEmail = validate(
  z.object({
    params: z.object({
      token: z.string({ required_error: 'User email token is required' }),
    }),
  })
);

export const update = validate(
  z.object({
    body: z
      .object({
        personType: z.string().optional(),
        cpf: z
          .string({ required_error: 'User CPF is required' })
          .length(11, 'CPF must be exactly 14 characters long')
          .optional(),
        birthday: z.coerce
          .date({ required_error: 'User birthday is required' })
          .optional(),
        profession: z
          .string({ required_error: 'Profession is required' })
          .min(1, 'Profession must be atleast 1 characters')
          .max(50, 'Profession must be a maximum of 50 characters')
          .optional(),
        emailVerified: z.boolean().optional(),
      })
      .merge(updateUserSchema),
    params: z.object({
      _id: objectIdSchema('User _id'),
    }),
  })
);

export const destroy = validate(
  z.object({
    params: z.object({
      _id: objectIdSchema('User _id'),
    }),
  })
);
