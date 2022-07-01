import { Router } from 'express';
import { getGroups } from '@controllers/public/mikrotik';
import { authMiddleware } from '@middlewares';

const GroupRoute = Router();
const path = '/group';

export const GroupDoc = p => {
  return {
    [`${p}${path}s`]: {
      get: {
        tags: ['Mikrotik'],
        summary: 'get all mikrotik product group from public API',
        responses: { '200': { description: 'OK' }, '500': { description: 'Server Error' } },
      },
    },
  };
};

// Read
GroupRoute.get(`${path}s`, authMiddleware, getGroups);

export default GroupRoute;
