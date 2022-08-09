import DEV from "../configs/environment/development.json";

export const CREDENTIALS = process.env.CREDENTIALS === "true";
const PROD = process.env;

export const NODE_ENV = PROD.NODE_ENV || DEV.NODE_ENV;
export const PORT = PROD.PORT || DEV.PORT + 30;

export const DB = {
  HOST: PROD.DB_HOST || DEV.DB_HOST,
  PORT: PROD.DB_PORT || DEV.DB_PORT,
  USER: PROD.DB_USER || DEV.DB_USER,
  PASSWORD: PROD.DB_PASSWORD || DEV.DB_PASSWORD,
  DATABASE: PROD.DB_DATABASE || DEV.DB_DATABASE,
};

export const SECRET_KEY = PROD.SECRET_KEY || DEV.SECRET_KEY;

export const LOG = {
  FORMAT: PROD.LOG_FORMAT || DEV.LOG_FORMAT,
  DIR: PROD.LOG_DIR || DEV.LOG_DIR,
};

export const ORIGIN = PROD.ORIGIN || DEV.ORIGIN;

export const DOMAIN = {
  COUNTRIES: "https://api.worldbank.org",
  INDONESIA: "https://ibnux.github.io",
  MIKROTIK: "https://mikrotik.com",
};
