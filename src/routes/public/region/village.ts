import { Router } from 'express';
import { getVillages } from '@controllers/public/region';
import { authMiddleware } from '@middlewares';

const VillageRoute = Router();
const path = '/village';

export const VillageDoc = p => {
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
VillageRoute.get(`${path}s/:id`, authMiddleware, getVillages);

export default VillageRoute;
