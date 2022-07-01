import { config } from 'dotenv';

config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
export const DOMAIN = {
  COUNTRIES: 'https://api.worldbank.org',
  INDONESIA: 'https://ibnux.github.io',
  MIKROTIK: 'https://mikrotik.com',
};
export const SWAGGER = {
  info: { title: 'SUPPORT REST API DOCS', version: '1.0.0', description: 'Rest API' },
  swagger: '2.0',
  paths: {
    '/users': {
      get: {
        tags: ['users'],
        summary: 'Find All Users',
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
      post: {
        tags: ['users'],
        summary: 'Add User',
        parameters: [{ name: 'body', in: 'body', description: 'user Data', required: true, schema: { $ref: '#/definitions/users' } }],
        responses: {
          '201': { description: 'Created' },
          '400': { description: 'Bad Request' },
          '409': { description: 'Conflict' },
          '500': { description: 'Server Error' },
        },
      },
    },
    '/users/{id}': {
      get: {
        tags: ['users'],
        summary: 'Find User By Id',
        parameters: [{ name: 'id', in: 'path', description: 'User Id', required: true, type: 'integer' }],
        responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
      },
      put: {
        tags: ['users'],
        summary: 'Update User By Id',
        parameters: [
          { name: 'id', in: 'path', description: 'user Id', required: true, type: 'integer' },
          { name: 'body', in: 'body', description: 'user Data', required: true, schema: { $ref: '#/definitions/users' } },
        ],
        responses: {
          '200': { description: 'OK' },
          '400': { description: 'Bad Request' },
          '409': { description: 'Conflict' },
          '500': { description: 'Server Error' },
        },
      },
      delete: {
        tags: ['users'],
        summary: 'Delete User By Id',
        parameters: [{ name: 'id', in: 'path', description: 'user Id', required: true, type: 'integer' }],
        responses: { '200': { description: 'OK' }, '409': { description: 'Conflict' }, '500': { description: 'Server Error' } },
      },
    },
    schemes: { '0': 'https' },
  },
  definitions: {
    users: {
      type: 'object',
      required: ['email', 'password'],
      properties: { email: { type: 'string', description: 'user Email' }, password: { type: 'string', description: 'user Password' } },
    },
  },
  responses: {},
  parameters: {},
  securityDefinitions: {},
  tags: [{ name: 'users', description: 'users API' }],
};
export const DOC = {
  path: {
    public: {
      region: {
        country: '/public/region/country',
      },
    },
  },
};
export const PATH = {};
