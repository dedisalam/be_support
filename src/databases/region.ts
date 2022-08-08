import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  NODE_ENV,
} from "@config";
import { City, Country, Province, SubDistrict, Village } from "@models/region";
import { logger } from "@utils";
import Sequelize from "sequelize";

const DB_REGION = `${DB_DATABASE}_region`;

const sequelize = new Sequelize.Sequelize(DB_REGION, DB_USER, DB_PASSWORD, {
  dialect: "mysql",
  host: DB_HOST,
  port: Number(DB_PORT),
  timezone: "+07:00",
  define: {
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
    underscored: true,
    freezeTableName: true,
  },
  pool: {
    min: 0,
    max: 5,
  },
  logQueryParameters: NODE_ENV === "development",
  logging: (query, time) => {
    logger.info(`${time}ms ${query}`);
  },
  benchmark: true,
});

sequelize.authenticate();

const REGION = {
  Country: Country(sequelize),
  Province: Province(sequelize),
  City: City(sequelize),
  SubDistrict: SubDistrict(sequelize),
  Village: Village(sequelize),
  sequelize, // connection instance (RAW queries)
  Sequelize, // library
};

export default REGION;
