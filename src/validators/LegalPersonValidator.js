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
          .url('Invalid url')
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
      })
      .merge(createUserSchema),
  })
);

export const update = validate(
  z.object({
    body: z
      .object({
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
          .url('Invalid url')
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
