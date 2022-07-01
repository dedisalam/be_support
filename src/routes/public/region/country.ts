import { Router } from 'express';
import { getCountry } from '@controllers/public/region';
import { authMiddleware } from '@middlewares';

const CountryRoute = Router();
const path = '/country';

export const CountryDoc = p => {
  return {
    [`${p}${path}`]: {
      get: {
        tags: ['Region'],
        summary: 'get Indonesia country from public API',
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

// Read
CountryRoute.get(`${path}`, authMiddleware, getCountry);

export default CountryRoute;
