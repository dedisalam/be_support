import { Router } from 'express';
import { getVillages } from '@controllers/public/region';
import { authMiddleware } from '@middlewares';

const Village = Router();
const path = '/village';

export const Doc = p => {
  return {
    [`${p}${path}s/{id}`]: {
      get: {
        tags: ['Region'],
        summary: 'get all villages in a sub-district from public API',
        parameters: [{ name: 'id', in: 'path', description: 'Sub-district Id', required: true, type: 'integer' }],
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

// Read
Village.get(`${path}s/:id`, authMiddleware, getVillages);

export default Village;
