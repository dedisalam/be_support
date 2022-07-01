import { Router } from 'express';
import MikrotikRoute, { MikrotikDoc } from './mikrotik';
import RegionRoute, { RegionDoc } from './region';

const PublicRoute = Router();
const path = '/public';

export const PublicDoc = () => {
  return {
    ...RegionDoc(`${path}`),
    ...MikrotikDoc(`${path}`),
  };
};

PublicRoute.use(path, RegionRoute);
PublicRoute.use(path, MikrotikRoute);

export default PublicRoute;
