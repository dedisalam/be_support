import { Router } from 'express';
import Cities, { Doc as CD } from './city';
import Country, { Doc as COD } from './country';
import Provinces, { Doc as PD } from './province';
import SubDistricts, { Doc as SD } from './subDistrict';
import Villages, { Doc as VD } from './village';

const Region = Router();
const path = '/region';

export const Doc = p => {
  return {
    ...CD(`${p}${path}`),
    ...COD(`${p}${path}`),
    ...PD(`${p}${path}`),
    ...SD(`${p}${path}`),
    ...VD(`${p}${path}`),
  };
};

Region.use(path, Country);
Region.use(path, Provinces);
Region.use(path, Cities);
Region.use(path, SubDistricts);
Region.use(path, Villages);

export default Region;
