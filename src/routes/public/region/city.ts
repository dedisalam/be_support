import { Router } from 'express';
import { getCities } from '@controllers/public/region';
import { authMiddleware } from '@middlewares';

const CityRoute = Router();
// const path = '/city';

export const CityDoc = p => {
  return {
    [`${p}/cities/{id}`]: {
      get: {
        tags: ['Region'],
        summary: 'get all cities in a province from public API',
        parameters: [{ name: 'id', in: 'path', description: 'Province Id', required: true, type: 'integer' }],
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

// Read
CityRoute.get(`/cities/:id`, authMiddleware, getCities);

export default CityRoute;
