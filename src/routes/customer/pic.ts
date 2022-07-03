import { getPics } from '@controllers/customer';
import { Router } from 'express';

const Pic = Router();
const path = '/pic';

export const Doc = p => {
  return {
    [`${p}${path}s`]: {
      get: {
        tags: ['Customer'],
        summary: 'get customers pic profiles',
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

Pic.get(`${path}s`, getPics);

export default Pic;
