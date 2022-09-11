import Sequelize from 'sequelize';
import CategoryModel from '@models/customer/category';
import CogsModel from '@models/customer/cogs';
import CustomerModel from '@models/customer/customer';
import PicModel from '@models/customer/pic';
import ProfileModel from '@models/customer/profile';
import ServiceModel from '@models/customer/service';
import Database from '@utils/database';

const sequelize = Database(Sequelize, 'customer');

const CUSTOMER = {
  Category: CategoryModel(sequelize),
  Cogs: CogsModel(sequelize),
  Customer: CustomerModel(sequelize),
  Pic: PicModel(sequelize),
  Profile: ProfileModel(sequelize),
  Service: ServiceModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default CUSTOMER;
