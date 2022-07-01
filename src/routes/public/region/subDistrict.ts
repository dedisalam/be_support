import { Router } from 'express';
import { getSubDistricts } from '@controllers/public/region';
import { authMiddleware } from '@middlewares';

const SubDistrictRoute = Router();
const path = '/sub-district';

export const SubDistrictDoc = p => {
  return {
    [`${p}${path}s/{id}`]: {
      get: {
        tags: ['Region'],
        summary: 'get all sub-districts in a city from public API',
        parameters: [{ name: 'id', in: 'path', description: 'City Id', required: true, type: 'integer' }],
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

// Read
SubDistrictRoute.get(`${path}s/:id`, authMiddleware, getSubDistricts);

export default SubDistrictRoute;
