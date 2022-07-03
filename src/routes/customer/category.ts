import { getCategories, postCategory } from '@controllers/customer';
import { Router } from 'express';

const Category = Router();
const path = '/category';

export const Doc = p => {
  return {
    [`${p}/categories`]: {
      get: {
        tags: ['Customer'],
        summary: 'get customers category',
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};
// Create
Category.post(path, postCategory);

// Read
Category.get(`/categories`, getCategories);

// Update
// Delete

export default Category;
