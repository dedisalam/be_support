import { Router } from 'express';
import { getProvinces } from '@controllers/public/region';
import { authMiddleware } from '@middlewares';

const Province = Router();
const path = '/province';

export const Doc = p => {
  return {
    [`${p}${path}s`]: {
      get: {
        tags: ['Region'],
        summary: 'get all Indonesia provinces from public API',
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

// Read
Province.get(`${path}s`, authMiddleware, getProvinces);

export default Province;
