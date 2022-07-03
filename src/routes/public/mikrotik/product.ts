import { Router } from 'express';
import { getProductById, getProductsByGroup } from '@controllers/public/mikrotik';
import { authMiddleware } from '@middlewares';

const Product = Router();
const path = '/product';

export const Doc = p => {
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
Product.get(`${path}s/:group`, authMiddleware, getProductsByGroup);
Product.get(`${path}/:id`, authMiddleware, getProductById);

export default Product;
