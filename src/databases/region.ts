import Sequelize from 'sequelize';
import CountryModel from '@models/region/country';
import ProvinceModel from '@models/region/province';
import CityModel from '@models/region/city';
import SubdistrictModel from '@models/region/subdistrict';
import VillageModel from '@models/region/village';
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
