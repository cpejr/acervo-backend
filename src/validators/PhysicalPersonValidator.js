import { z } from 'zod';

import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const get = validate(
  z.object({
    query: z.object({
      _id: objectIdSchema('User _id').optional(),
      name: z.string().optional(),
      userName: z.string().optional(),
      email: z.string().optional(),
      phone: z.string().optional(),
      landline: z.string().optional(),
      contactChannel: z.string().optional(),
      zipCode: z.string().optional(),
      state: z.string().optional(),
      city: z.string().optional(),
      address: z.string().optional(),
      number: z.string().optional(),
      complement: z.string().optional(),
      observations: z.string().optional(),
      emailVerified: z.boolean().optional(),

      personType: z.string().optional(),
      cpf: z.string().optional(),
      birthday: z.date().optional(),
      profession: z.string().optional(),
    }),
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
    body: z.object({
      name: z
        .string({ required_error: 'User name is required' })
        .min(3, 'User name must be atleast 3 characters')
        .max(50, 'User name must be a maximum of 50 characters'),
      userName: z
        .string({ required_error: 'Username is required' })
        .min(3, 'Username must be atleast 3 characters')
        .max(10, 'Username must be a maximum of 10 characters'),
      email: z
        .string({ required_error: 'Email is required' })
        .email('User email must be valid'),
      phone: z
        .string()
        .length(11, 'Phone must be exactly 11 characters long')
        .optional(),
      landline: z
        .string()
        .length(10, 'Landline must be exactly 10 characters long')
        .optional(),
      contactChannel: z
        .string({ required_error: 'Contact channel is required' })
        .min(3, 'Contact channel must be atleast 3 characters')
        .max(40, 'Contact channel must be a maximum of 40 characters'),
      zipCode: z
        .string({ required_error: 'Zip code is required' })
        .length(8, 'Zip code must be exactly 8 characters long'),
      state: z
        .string({ required_error: 'State is required' })
        .min(3, 'State must be atleast 3 characters')
        .max(40, 'State must be a maximum of 40 characters'),
      city: z
        .string({ required_error: 'City is required' })
        .min(3, 'City must be atleast 3 characters')
        .max(40, 'City must be a maximum of 40 characters'),
      address: z
        .string({ required_error: 'Address is required' })
        .min(3, 'Address must be atleast 3 characters')
        .max(40, 'Address must be a maximum of 40 characters'),
      number: z
        .string()
        .min(1, 'Number must be atleast 1 characters')
        .max(10, 'Number must be a maximum of 10 characters')
        .optional(),
      complement: z
        .string()
        .min(1, 'Complement must be atleast 1 characters')
        .max(50, 'Complement must be a maximum of 50 characters')
        .optional(),
      observations: z
        .string()
        .min(1, 'Observations must be atleast 1 characters')
        .max(50, 'Observations must be a maximum of 50 characters'),
      emailVerified: z.boolean().default(false),

      personType: z.string().default('padrao'),
      cpf: z
        .string({ required_error: 'User CPF is required' })
        .length(11, 'CPF must be exactly 14 characters long'),
      birthday: z.coerce.date({ required_error: 'User birthday is required' }),
      profession: z
        .string({ required_error: 'Profession is required' })
        .min(1, 'Profession must be atleast 1 characters')
        .max(50, 'Profession must be a maximum of 50 characters'),
    }),
  })
);

export const update = validate(
  z.object({
    body: z.object({
      name: z
        .string()
        .min(3, 'User name must be atleast 3 characters')
        .max(50, 'User name must be a maximum of 50 characters')
        .optional(),
      userName: z
        .string()
        .min(3, 'Username must be atleast 3 characters')
        .max(10, 'Username must be a maximum of 10 characters')
        .optional(),
      email: z.string().email('User email must be valid').optional(),
      phone: z
        .string()
        .length(11, 'Phone must be exactly 11 characters long')
        .optional(),
      landline: z
        .string()
        .length(10, 'Landline must be exactly 10 characters long')
        .optional(),
      contactChannel: z
        .string()
        .min(3, 'Contact channel must be atleast 3 characters')
        .max(40, 'Contact channel must be a maximum of 40 characters')
        .optional(),
      zipCode: z
        .string()
        .length(8, 'Zip code must be exactly 8 characters long')
        .optional(),
      state: z
        .string()
        .min(3, 'State must be atleast 3 characters')
        .max(40, 'State must be a maximum of 40 characters')
        .optional(),
      city: z
        .string()
        .min(3, 'City must be atleast 3 characters')
        .max(40, 'City must be a maximum of 40 characters')
        .optional(),
      address: z
        .string()
        .min(3, 'Address must be atleast 3 characters')
        .max(40, 'Address must be a maximum of 40 characters')
        .optional(),
      number: z
        .string()
        .min(1, 'Number must be atleast 1 characters')
        .max(10, 'Number must be a maximum of 10 characters')
        .optional(),
      complement: z
        .string()
        .min(1, 'Complement must be atleast 1 characters')
        .max(50, 'Complement must be a maximum of 50 characters')
        .optional(),
      observations: z
        .string()
        .min(1, 'Observations must be atleast 1 characters')
        .max(50, 'Observations must be a maximum of 50 characters')
        .optional(),
      emailVerified: z.boolean().optional(),

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
    }),
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
