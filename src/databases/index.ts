import { DB_HOST, DB_PORT, DB_DATABASE } from '@config';

export const dbConnection = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}_admin`,
  options: {
    auth: {
      username: 'jalawave',
      password: 'j4l4w4v3!@#',
    },
  },
};
