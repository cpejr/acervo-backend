import { z } from 'zod';

// import objectIdSchema from '../utils/libs/zod/objectIdSchema.js';
import validate from './validate.js';

export const create = validate(
  z.object({
    body: z.object({
      name: z
        .string({ required_error: 'User name is required' })
        .min(3, 'User name must be atleast 3 characters')
        .max(40, 'User name must be a maximum of 40 characters'),
      surname: z
        .string({ required_error: 'User surname is required' })
        .min(3, 'User surname must be atleast 3 characters')
        .max(40, 'User surname must be a maximum of 40 characters'),
      company: z
        .string({ required_error: 'User company is required' })
        .min(3, 'Use company must be atleast 3 characters')
        .max(40, 'User company must be a maximum of 40 characters'),
      role: z
        .string({ required_error: 'User role is required' })
        .min(3, 'Use role must be atleast 3 characters')
        .max(40, 'User role must be a maximum of 40 characters'),
      isAdmin: z.boolean().default(false),
      emailVerified: z.boolean().default(false),
      email: z
        .string({ required_error: 'User email is required' })
        .email('User email must be valid'),
      password: z
        .string({ required_error: 'Password email is required' })
        .min(6, 'User password must be atleast 3 characters')
        .max(16, 'User password must be a maximum of 30 characters'),
      country: z
        .string({ required_error: 'User country is required' })
        .min(3, 'User country must be atleast 3 characters')
        .max(30, 'User country must be a maximum of 30 characters'),
      state: z
        .string({ required_error: 'User state is required' })
        .min(3, 'User state must be atleast 3 characters')
        .max(30, 'User state must be a maximum of 30 characters'),
      city: z
        .string({ required_error: 'User city is required' })
        .min(3, 'User city must be atleast 3 characters')
        .max(30, 'User city must be a maximum of 30 characters'),
      address: z
        .string({ required_error: 'User address is required' })
        .min(3, 'User address must be atleast 3 characters')
        .max(50, 'User address must be a maximum of 50 characters'),
    }),
  })
);

export const update = validate(
  z.object({
    body: z.object({
      name: z
        .string()
        .min(3, 'User name must be atleast 3 characters')
        .max(40, 'User name must be a maximum of 40 characters'),
      surname: z
        .string()
        .min(3, 'User surname must be atleast 3 characters')
        .max(40, 'User surname must be a maximum of 40 characters'),
      company: z
        .string()
        .min(3, 'Use company must be atleast 3 characters')
        .max(40, 'User company must be a maximum of 40 characters'),
      role: z
        .string()
        .min(3, 'Use role must be atleast 3 characters')
        .max(40, 'User role must be a maximum of 40 characters'),
      isAdmin: z.boolean().default(false),
      emailVerified: z.boolean().default(false),
      email: z.string().email('User email must be valid'),
      password: z
        .string()
        .min(6, 'User password must be atleast 3 characters')
        .max(16, 'User password must be a maximum of 30 characters'),
      country: z
        .string()
        .min(3, 'User country must be atleast 3 characters')
        .max(30, 'User country must be a maximum of 30 characters'),
      state: z
        .string()
        .min(3, 'User state must be atleast 3 characters')
        .max(30, 'User state must be a maximum of 30 characters'),
      city: z
        .string()
        .min(3, 'User city must be atleast 3 characters')
        .max(30, 'User city must be a maximum of 30 characters'),
      address: z
        .string()
        .min(3, 'User address must be atleast 3 characters')
        .max(50, 'User address must be a maximum of 50 characters'),
    }),
  })
);

export const verifyEmail = validate(
  z.object({
    params: z.object({
      token: z.string({ required_error: 'User token is required' }),
    }),
  })
);
