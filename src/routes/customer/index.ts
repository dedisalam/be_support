import { getCustomers } from '@controllers/customer';
import { Router } from 'express';
import Category, { Doc as CD } from './category';
import Pic, { Doc as PPD } from './pic';
import Profile, { Doc as PD } from './profile';
import Service, { Doc as SD } from './service';

const Customer = Router();
const path = '/customer';

export const Doc = () => {
  return {
    ...CD(`${path}`),
    ...PPD(`${path}`),
    ...PD(`${path}`),
    ...SD(`${path}`),
  };
};

Customer.use(path, Category);
Customer.use(path, Profile);
Customer.use(path, Pic);
Customer.use(path, Service);
Customer.get(`${path}s`, getCustomers);

export default Customer;
