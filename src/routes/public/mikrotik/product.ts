import { Router } from 'express';
import { getProductById, getProductsByGroup } from '@controllers/public/mikrotik';
import { authMiddleware } from '@middlewares';

const ProductRoute = Router();
const path = '/product';

export const ProductDoc = p => {
  return {
    [`${p}${path}s/{group}`]: {
      get: {
        tags: ['Mikrotik'],
        summary: 'get all mikrotik product by group from public API',
        parameters: [{ name: 'group', in: 'path', description: 'Group', required: true, type: 'string' }],
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
    [`${p}${path}/{id}`]: {
      get: {
        tags: ['Mikrotik'],
        summary: 'get detail mikrotik product by id from public API',
        parameters: [{ name: 'id', in: 'path', description: 'Product Id', required: true, type: 'string' }],
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

// Read
ProductRoute.get(`${path}s/:group`, authMiddleware, getProductsByGroup);
ProductRoute.get(`${path}/:id`, authMiddleware, getProductById);

export default ProductRoute;
