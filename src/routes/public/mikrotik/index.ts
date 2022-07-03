import { Router } from 'express';
import Group, { Doc as GD } from './group';
import Product, { Doc as PD } from './product';

const Mikrotik = Router();
const path = '/mikrotik';

export const Doc = p => {
  return {
    ...GD(`${p}${path}`),
    ...PD(`${p}${path}`),
  };
};

Mikrotik.use(path, Group);
Mikrotik.use(path, Product);

export default Mikrotik;
