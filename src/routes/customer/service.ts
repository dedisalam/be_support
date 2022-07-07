import { Delete, Read, ReadById, Create, Update } from '@controllers/customer/service';
import { Service as PD } from '@dtos/customer/service';
import { authMiddleware, validationMiddleware } from '@middlewares';
import { Router } from 'express';

const Service = Router();
const path = '/service';

// Create
Service.post(`${path}`, authMiddleware, validationMiddleware(PD, 'body'), Create);

// Read
Service.get(`${path}s`, authMiddleware, Read);
Service.get(`${path}/:id`, authMiddleware, ReadById);

// Update
Service.put(`${path}/:id`, authMiddleware, validationMiddleware(PD, 'body'), Update);

// Delete
Service.delete(`${path}/:id`, authMiddleware, Delete);

export default Service;
export const Doc = p => {
  const name = 'Service';
  return {
    paths: {
      [`${p}${path}`]: {
        post: {
          tags: [name],
          summary: 'Add ',
          parameters: [{ name: 'body', in: 'body', description: 'service Data', required: true, schema: { $ref: `#/definitions/${name}` } }],
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
          summary: 'Find All ',
          responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
        },
      },
      [`${p}${path}/{id}`]: {
        get: {
          tags: [name],
          summary: 'Find  By Id',
          parameters: [{ name: 'id', in: 'path', description: ' Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
        put: {
          tags: [name],
          summary: 'Update  By Id',
          parameters: [
            { name: 'id', in: 'path', description: 'service Id', required: true, type: 'integer' },
            { name: 'body', in: 'body', description: 'service Data', required: true, schema: { $ref: `#/definitions/${name}` } },
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
          summary: 'Delete  By Id',
          parameters: [{ name: 'id', in: 'path', description: 'service Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
      },
    },
    definitions: {
      [name]: {
        type: 'object',
        required: ['name'],
        properties: { name: { type: 'string', description: 'service name' } },
      },
    },
    tags: [{ name, description: ' API' }],
  };
};
