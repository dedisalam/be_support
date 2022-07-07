import { Delete, Read, ReadById, Create, Update } from '@controllers/customer/pic';
import { Pic as PD } from '@dtos/customer/pic';
import { authMiddleware, validationMiddleware } from '@middlewares';
import { Router } from 'express';

const Pic = Router();
const path = '/pic';

// Create
Pic.post(`${path}`, authMiddleware, validationMiddleware(PD, 'body'), Create);

// Read
Pic.get(`${path}s`, authMiddleware, Read);
Pic.get(`${path}/:id`, authMiddleware, ReadById);

// Update
Pic.put(`${path}/:id`, authMiddleware, validationMiddleware(PD, 'body'), Update);

// Delete
Pic.delete(`${path}/:id`, authMiddleware, Delete);

export default Pic;
export const Doc = p => {
  const name = 'Person In Charge';
  return {
    paths: {
      [`${p}${path}`]: {
        post: {
          tags: [name],
          summary: 'Add Pic',
          parameters: [{ name: 'body', in: 'body', description: 'pic Data', required: true, schema: { $ref: `#/definitions/${name}` } }],
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
          summary: 'Find All Pic',
          responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
        },
      },
      [`${p}${path}/{id}`]: {
        get: {
          tags: [name],
          summary: 'Find Pic By Id',
          parameters: [{ name: 'id', in: 'path', description: 'Pic Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
        put: {
          tags: [name],
          summary: 'Update Pic By Id',
          parameters: [
            { name: 'id', in: 'path', description: 'pic Id', required: true, type: 'integer' },
            { name: 'body', in: 'body', description: 'pic Data', required: true, schema: { $ref: `#/definitions/${name}` } },
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
          summary: 'Delete Pic By Id',
          parameters: [{ name: 'id', in: 'path', description: 'pic Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
      },
    },
    definitions: {
      [name]: {
        type: 'object',
        required: ['name'],
        properties: { name: { type: 'string', description: 'pic name' } },
      },
    },
    tags: [{ name, description: 'Pic API' }],
  };
};
