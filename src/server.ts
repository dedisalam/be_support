import express from 'express';
import https from 'https';
import { readFileSync } from 'fs';
import routes from './routes';
import { logger, validateEnv } from './utils';
import { NODE_ENV, PORT } from './config';
import { connectToDatabase, initializeErrorHandling, initializeMiddlewares, initializeSwagger } from './init';

validateEnv();

const app = express();

connectToDatabase();
initializeMiddlewares(app);
routes(app);
initializeSwagger(app);
initializeErrorHandling(app);

https
  .createServer(
    {
      key: readFileSync('./backend.key'),
      cert: readFileSync('./backend.crt'),
    },
    app,
  )
  .listen(PORT || 3000, () => {
    logger.info(`=================================`);
    logger.info(`======= ENV: ${NODE_ENV} ========`);
    logger.info(`🚀 App listening on the port ${PORT}`);
    logger.info(`=================================`);
  });
