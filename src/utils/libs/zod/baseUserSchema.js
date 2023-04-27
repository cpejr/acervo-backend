import { z } from 'zod';

import objectIdSchema from './objectIdSchema.js';

export const getUserSchema = z.object({
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
});

export const createUserSchema = z.object({
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
});

export const updateUserSchema = z.object({
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
});
