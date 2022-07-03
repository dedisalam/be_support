import { Router } from 'express';
import Mikrotik, { Doc as MD } from './mikrotik';
import Region, { Doc as RD } from './region';

const Public = Router();
const path = '/public';

export const Doc = () => {
  return {
    ...MD(`${path}`),
    ...RD(`${path}`),
  };
};

Public.use(path, Mikrotik);
Public.use(path, Region);

export default Public;
