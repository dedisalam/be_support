import Sequelize from 'sequelize';
import { NODE_ENV, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE } from '@config';
import { logger } from '@utils';
import { UserModels } from '@models';
import connection from './initDatabase';

const DB_ADMIN = `${DB_DATABASE}_admin`;

connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_ADMIN}\`;`);
const sequelize = new Sequelize.Sequelize(DB_ADMIN, DB_USER, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: Number(DB_PORT),
  timezone: '+09:00',
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

const ADMIN = {
  Users: UserModels(sequelize),
  sequelize, // connection instance (RAW queries)
  // Sequelize, // library
};

export default ADMIN;
