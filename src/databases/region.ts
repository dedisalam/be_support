import Sequelize from 'sequelize';
import CountryModel from '@models/region/country.model';
import ProvinceModel from '@models/region/province.model';
import CityModel from '@models/region/city.model';
import SubdistrictModel from '@models/region/subdistrict.model';
import VillageModel from '@models/region/village.model';
import Database from '@utils/database';

const sequelize = Database(Sequelize, 'region');

const REGION = {
  Country: CountryModel(sequelize),
  Province: ProvinceModel(sequelize),
  City: CityModel(sequelize),
  Subdistrict: SubdistrictModel(sequelize),
  Village: VillageModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default REGION;
