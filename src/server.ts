// import { AuthRoute, DashboardRoute, UsersRoute } from '@routes';
// import { validateEnv } from '@utils';
// import App from './app';

// validateEnv();

// const app = new App([new DashboardRoute(), new UsersRoute(), new AuthRoute()]);
// app.listen();

import express from 'express';
import routes from '@routes';
import { logger } from './utils';
import { NODE_ENV, PORT } from './config';
import { connectToDatabase, initializeMiddlewares, initializeSwagger } from './init';

const app = express();

connectToDatabase();
initializeMiddlewares(app);
routes(app);
initializeSwagger(app);
// initializeErrorHandling();

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

app.listen(PORT, () => {
  logger.info(`=================================`);
  logger.info(`======= ENV: ${NODE_ENV} ========`);
  logger.info(`🚀 App listening on the port ${PORT}`);
  logger.info(`=================================`);
});
