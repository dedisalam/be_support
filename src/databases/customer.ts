import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import { logger } from '@utils';
import { Category, Customer, Pic, Profile, Service } from '@models/customer';

const DB_CUSTOMER = `${DB_DATABASE}_customer`;

const sequelize = new Sequelize.Sequelize(DB_CUSTOMER, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  timezone: '+07:00',
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_general_ci',
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === 'development',
  logging: (query, time) => {
    logger.info(`${time}ms ${query}`);
  },
  benchmark: true,
});

sequelize.authenticate();

const CUSTOMER = {
  Category: Category(sequelize),
  Customer: Customer(sequelize),
  Profile: Profile(sequelize),
  Pic: Pic(sequelize),
  Service: Service(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default CUSTOMER;
