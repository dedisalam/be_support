import { Delete, Read, ReadById, Create, Update } from '@controllers/customer/category';
import { Category as CD } from '@dtos/customer/category';
import { authMiddleware, validationMiddleware } from '@middlewares';
import { Router } from 'express';

const Category = Router();
const path = '/category';

// Create
Category.post(`${path}`, authMiddleware, validationMiddleware(CD, 'body'), Create);

// Read
Category.get(`/categories`, authMiddleware, Read);
Category.get(`${path}/:id`, authMiddleware, ReadById);

// Update
Category.put(`${path}/:id`, authMiddleware, validationMiddleware(CD, 'body'), Update);

// Delete
Category.delete(`${path}/:id`, authMiddleware, Delete);

export default Category;
export const Doc = p => {
  const name = 'Category';
  return {
    paths: {
      [`${p}${path}`]: {
        post: {
          tags: [name],
          summary: 'Add Category',
          parameters: [{ name: 'body', in: 'body', description: 'category Data', required: true, schema: { $ref: `#/definitions/${name}` } }],
          responses: {
            '201': { description: 'Created' },
            '400': { description: 'Bad Request' },
            '409': { description: 'Conflict' },
            '500': { description: 'Server Error' },
          },
        },
      },
      [`${p}/categories`]: {
        get: {
          tags: [name],
          summary: 'Find All Category',
          responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
        },
      },
      [`${p}${path}/{id}`]: {
        get: {
          tags: [name],
          summary: 'Find Category By Id',
          parameters: [{ name: 'id', in: 'path', description: 'Category Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
        put: {
          tags: [name],
          summary: 'Update Category By Id',
          parameters: [
            { name: 'id', in: 'path', description: 'category Id', required: true, type: 'integer' },
            { name: 'body', in: 'body', description: 'category Data', required: true, schema: { $ref: `#/definitions/${name}` } },
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
          summary: 'Delete Category By Id',
          parameters: [{ name: 'id', in: 'path', description: 'category Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
      },
    },
    definitions: {
      [name]: {
        type: 'object',
        required: ['name'],
        properties: { name: { type: 'string', description: 'category name' } },
      },
    },
    tags: [{ name, description: 'Category API' }],
  };
};
