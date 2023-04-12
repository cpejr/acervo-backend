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

      cnpj: z.string().optional(),
      contactPersonName: z.string().optional(),
      department: z.string().optional(),
      office: z.string().optional(),
      site: z.string().optional(),
      employeesNumber: z.string().optional(),
      fantasyName: z.string().optional(),
      corporateName: z.string().optional(),
      municipalRegistration: z.string().optional(),
      economicActivity: z.string().optional(),
      foundingDate: z.date().optional(),
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

      cnpj: z
        .string({ required_error: 'User CNPJ is required' })
        .length(14, 'CNPJ must be exactly 14 characters long'),

      contactPersonName: z
        .string({ required_error: 'User name is required' })
        .min(3, 'Contact person name must be atleast 3 characters')
        .max(40, 'Contact person name must be a maximum of 40 characters'),

      department: z
        .string({ required_error: 'Department is required' })
        .min(3, 'Department must be atleast 3 characters')
        .max(40, 'Department must be a maximum of 40 characters'),

      office: z
        .string({ required_error: 'Office is required' })
        .min(3, 'Office must be atleast 3 characters')
        .max(40, 'Office must be a maximum of 40 characters'),

      site: z
        .string({ required_error: 'Site is required' })
        .min(6, 'Site must be atleast 3 characters')
        .max(200, 'Site must be a maximum of 30 characters'),

      employeesNumber: z
        .string({ required_error: 'Employees number is required' })
        .min(1, 'Employees number must be atleast 3 characters')
        .max(20, 'Employees number must be a maximum of 30 characters'),
      // Número de caracteres???
      fantasyName: z
        .string({ required_error: 'Fantasy name is required' })
        .min(3, 'Fantasy name must be atleast 3 characters')
        .max(50, 'Fantasy name must be a maximum of 30 characters'),

      corporateName: z
        .string({ required_error: 'Corporate name is required' })
        .min(3, 'Corporate name must be atleast 3 characters')
        .max(30, 'Corporate name must be a maximum of 30 characters'),

      stateRegistration: z
        .string({ required_error: 'state registration is required' })
        .min(3, 'state registration must be atleast 3 characters')
        .max(30, 'state registration must be a maximum of 30 characters'),

      municipalRegistration: z
        .string({ required_error: 'Municipal registration is required' })
        .min(3, 'Municipal registration must be atleast 3 characters')
        .max(30, 'Municipal registration must be a maximum of 30 characters'),

      economicActivity: z
        .string({ required_error: 'Economic activity is required' })
        .min(3, 'Economic activity must be atleast 3 characters')
        .max(30, 'Economic activity must be a maximum of 30 characters'),

      foundingDate: z.coerce.date({ required_error: 'Date is required' }),
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

      cnpj: z
        .string()
        .min(3, 'User CNPJ must be atleast 3 characters')
        .max(40, 'User CNPJ must be a maximum of 40 characters')
        .optional(),

      contactPersonName: z
        .string()
        .min(3, 'User name must be atleast 3 characters')
        .max(40, 'User name must be a maximum of 40 characters')
        .optional(),

      department: z
        .string()
        .min(3, 'Department must be atleast 3 characters')
        .max(40, 'Department must be a maximum of 40 characters')
        .optional(),

      office: z
        .string()
        .min(3, 'Office must be atleast 3 characters')
        .max(40, 'Office must be a maximum of 40 characters')
        .optional(),

      site: z
        .string()
        .min(6, 'Site must be atleast 3 characters')
        .max(200, 'Site must be a maximum of 30 characters')
        .optional(),

      employeesNumber: z
        .string()
        .min(1, 'Employees number must be atleast 3 characters')
        .max(20, 'Employees number must be a maximum of 30 characters')
        .optional(),
      // Número de caracteres???
      fantasyName: z
        .string()
        .min(3, 'Fantasy name must be atleast 3 characters')
        .max(50, 'Fantasy name must be a maximum of 30 characters')
        .optional(),

      corporateName: z
        .string()
        .min(3, 'Corporate name must be atleast 3 characters')
        .max(30, 'Corporate name must be a maximum of 30 characters')
        .optional(),

      stateRegistration: z
        .string()
        .min(3, 'state registration must be atleast 3 characters')
        .max(30, 'state registration must be a maximum of 30 characters')
        .optional(),

      municipalRegistration: z
        .string()
        .min(3, 'Municipal registration must be atleast 3 characters')
        .max(30, 'Municipal registration must be a maximum of 30 characters')
        .optional(),

      economicActivity: z
        .string()
        .min(3, 'Economic activity must be atleast 3 characters')
        .max(30, 'Economic activity must be a maximum of 30 characters')
        .optional(),

      foundingDate: z.coerce.date().optional(),
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
