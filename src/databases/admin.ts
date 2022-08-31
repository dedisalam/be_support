import Sequelize from 'sequelize';
import UserModel from '@models/admin/user.model';
import Database from '@utils/database';

const sequelize = Database(Sequelize, 'admin');

const ADMIN = {
  User: UserModel(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default ADMIN;
