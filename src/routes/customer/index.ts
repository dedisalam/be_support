import { authMiddleware, validationMiddleware } from '@middlewares';
import { Delete, Read, ReadById, Create, Update } from '@controllers/customer';
import { Router } from 'express';
import { Category as CategoryDto } from '@dtos/customer/category';
import Category, { Doc as CD } from './category';
import Pic, { Doc as PPD } from './pic';
import Profile, { Doc as PD } from './profile';
import Service, { Doc as SD } from './service';

const Customer = Router();
const path = '/customer';

// Nested
Customer.use(path, Category);
Customer.use(path, Profile);
Customer.use(path, Pic);
Customer.use(path, Service);

// Create
Customer.post(`${path}`, validationMiddleware(CategoryDto, 'body'), Create);

// Read
Customer.get(`${path}s`, Read);
Customer.get(`${path}/:id`, authMiddleware, ReadById);

// Update
Customer.put(`${path}/:id`, authMiddleware, validationMiddleware(CategoryDto, 'body'), Update);

// Delete
Customer.delete(`${path}/:id`, authMiddleware, Delete);

export default Customer;
export const CSD = p => {
  const name = 'Customer';
  return {
    paths: {
      [`${p}${path}`]: {
        post: {
          tags: [name],
          summary: 'Add Customer',
          parameters: [{ name: 'body', in: 'body', description: 'customer Data', required: true, schema: { $ref: `#/definitions/${name}` } }],
          responses: {
            '201': { description: 'Created' },
            '400': { description: 'Bad Request' },
            '409': { description: 'Conflict' },
            '500': { description: 'Server Error' },
          },
        },
      },
      [`${p}${path}s`]: {
        get: {
          tags: [name],
          summary: 'Find All Customer',
          responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
        },
      },
      [`${p}${path}/{id}`]: {
        get: {
          tags: [name],
          summary: 'Find Customer By Id',
          parameters: [{ name: 'id', in: 'path', description: 'Customer Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
        put: {
          tags: [name],
          summary: 'Update Customer By Id',
          parameters: [
            { name: 'id', in: 'path', description: 'customer Id', required: true, type: 'integer' },
            { name: 'body', in: 'body', description: 'customer Data', required: true, schema: { $ref: `#/definitions/${name}` } },
          ],
          responses: {
            '200': { description: 'OK' },
            '400': { description: 'Bad Request' },
            '409': { description: 'Conflict' },
            '500': { description: 'Server Error' },
          },
        },
        delete: {
          tags: [name],
          summary: 'Delete Customer By Id',
          parameters: [{ name: 'id', in: 'path', description: 'customer Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
      },
    },
    definitions: {
      [name]: {
        type: 'object',
        required: ['name'],
        properties: { name: { type: 'string', description: 'customer name' } },
      },
    },
    tags: [{ name, description: 'Customer API' }],
  };
};
export const Doc = () => {
  const csd = CSD('');
  const cd = CD(`${path}`);
  const ppd = PPD(`${path}`);
  const pd = PD(`${path}`);
  const sd = SD(`${path}`);
  return {
    paths: {
      ...csd.paths,
      ...cd.paths,
      ...ppd.paths,
      ...pd.paths,
      ...sd.paths,
    },
    definitions: {
      ...csd.definitions,
      ...cd.definitions,
      ...ppd.definitions,
      ...pd.definitions,
      ...sd.definitions,
    },
    tags: [...csd.tags, ...cd.tags, ...ppd.tags, ...pd.tags, ...sd.tags],
  };
};
