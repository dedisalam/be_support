import express from 'express';
import https from 'https';
import http from 'http';
import { readFileSync } from 'fs';
import routes from './routes';
import { logger, validateEnv } from './utils';
import { NODE_ENV, PORT } from './config';
import { connectToDatabase, initializeErrorHandling, initializeMiddlewares, initializeQuery, initializeSwagger } from './init';

validateEnv();

const app = express();

connectToDatabase();
initializeMiddlewares(app);
routes(app);
initializeSwagger(app);
initializeErrorHandling(app);
setTimeout(initializeQuery, 5000);

const httpsOption = {
  key: readFileSync('./support.key'),
  cert: readFileSync('./support.crt'),
};

const logsHttp = () => {
  logger.info(`=================================`);
  logger.info(`==============HTTP===============`);
  logger.info(`======= ENV: ${NODE_ENV} ========`);
  logger.info(`🚀 App listening on the port ${Number(PORT) + 1}`);
  logger.info(`=================================`);
};

const logsHttps = () => {
  logger.info(`=================================`);
  logger.info(`==============HTTPS==============`);
  logger.info(`======= ENV: ${NODE_ENV} ========`);
  logger.info(`🚀 App listening on the port ${PORT}`);
  logger.info(`=================================`);
};

http.createServer(app).listen(Number(PORT) + 1, logsHttp);
https.createServer(httpsOption, app).listen(PORT, logsHttps);
