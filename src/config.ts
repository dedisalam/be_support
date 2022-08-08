export const CREDENTIALS = process.env.CREDENTIALS === "true";
export const {
  NODE_ENV,
  PORT,
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_DATABASE,
  SECRET_KEY,
  LOG_FORMAT,
  LOG_DIR,
  ORIGIN,
} = process.env;
export const DOMAIN = {
  COUNTRIES: "https://api.worldbank.org",
  INDONESIA: "https://ibnux.github.io",
  MIKROTIK: "https://mikrotik.com",
};
