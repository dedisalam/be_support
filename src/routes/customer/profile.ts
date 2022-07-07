import { Delete, Read, ReadById, Create, Update } from '@controllers/customer/profile';
import { Profile as PD } from '@dtos/customer/profile';
import { authMiddleware, validationMiddleware } from '@middlewares';
import { Router } from 'express';

const Profile = Router();
const path = '/profile';

// Create
Profile.post(`${path}`, authMiddleware, validationMiddleware(PD, 'body'), Create);

// Read
Profile.get(`${path}s`, authMiddleware, Read);
Profile.get(`${path}/:id`, authMiddleware, ReadById);

// Update
Profile.put(`${path}/:id`, authMiddleware, validationMiddleware(PD, 'body'), Update);

// Delete
Profile.delete(`${path}/:id`, authMiddleware, Delete);

export default Profile;
export const Doc = p => {
  const name = 'Profile';
  return {
    paths: {
      [`${p}${path}`]: {
        post: {
          tags: [name],
          summary: 'Add Profile',
          parameters: [{ name: 'body', in: 'body', description: 'profile Data', required: true, schema: { $ref: `#/definitions/${name}` } }],
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
          summary: 'Find All Profile',
          responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
        },
      },
      [`${p}${path}/{id}`]: {
        get: {
          tags: [name],
          summary: 'Find Profile By Id',
          parameters: [{ name: 'id', in: 'path', description: 'Profile Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
        put: {
          tags: [name],
          summary: 'Update Profile By Id',
          parameters: [
            { name: 'id', in: 'path', description: 'profile Id', required: true, type: 'integer' },
            { name: 'body', in: 'body', description: 'profile Data', required: true, schema: { $ref: `#/definitions/${name}` } },
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
          summary: 'Delete Profile By Id',
          parameters: [{ name: 'id', in: 'path', description: 'profile Id', required: true, type: 'integer' }],
          responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
        },
      },
    },
    definitions: {
      [name]: {
        type: 'object',
        required: ['name'],
        properties: { name: { type: 'string', description: 'profile name' } },
      },
    },
    tags: [{ name, description: 'Profile API' }],
  };
};
