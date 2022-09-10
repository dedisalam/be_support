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

// Relasi Subdistrict - Village
REGION.Subdistrict.hasMany(REGION.Village, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.Village.belongsTo(REGION.Subdistrict);

// Relasi City - Subdistrict
REGION.City.hasMany(REGION.Subdistrict, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.Subdistrict.belongsTo(REGION.City);

// Relasi Province - City
REGION.Province.hasMany(REGION.City, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.City.belongsTo(REGION.Province);

// Relasi Country - Province
REGION.Country.hasMany(REGION.Province, {
  foreignKey: {
    allowNull: false,
  },
});
REGION.Province.belongsTo(REGION.Country);

export default REGION;
