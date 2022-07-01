import { Router } from 'express';
import CitiesRoute, { CityDoc } from './city';
import CountryRoute, { CountryDoc } from './country';
import ProvincesRoute, { ProvinceDoc } from './province';
import SubDistrictsRoute, { SubDistrictDoc } from './subDistrict';
import VillagesRoute, { VillageDoc } from './village';

const RegionRoute = Router();
const path = '/region';

export const RegionDoc = p => {
  return {
    ...CountryDoc(`${p}${path}`),
    ...ProvinceDoc(`${p}${path}`),
    ...CityDoc(`${p}${path}`),
    ...SubDistrictDoc(`${p}${path}`),
    ...VillageDoc(`${p}${path}`),
  };
};

// Nested
RegionRoute.use(path, CountryRoute);
RegionRoute.use(path, ProvincesRoute);
RegionRoute.use(path, CitiesRoute);
RegionRoute.use(path, SubDistrictsRoute);
RegionRoute.use(path, VillagesRoute);

export default RegionRoute;
