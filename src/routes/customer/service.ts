import { getServices } from '@controllers/customer';
import { Router } from 'express';

const Service = Router();
const path = '/service';

export const Doc = p => {
  return {
    [`${p}${path}s`]: {
      get: {
        tags: ['Customer'],
        summary: 'get customers service',
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

Service.get(`${path}s`, getServices);

export default Service;
