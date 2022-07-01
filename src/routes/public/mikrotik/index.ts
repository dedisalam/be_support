import { Router } from 'express';
import GroupRoute, { GroupDoc } from './group';
import ProductRoute, { ProductDoc } from './product';

const MikrotikRoute = Router();
const path = '/mikrotik';

export const MikrotikDoc = p => {
  return {
    ...GroupDoc(`${p}${path}`),
    ...ProductDoc(`${p}${path}`),
  };
};

MikrotikRoute.use(path, GroupRoute);
MikrotikRoute.use(path, ProductRoute);

export default MikrotikRoute;
