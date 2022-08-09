import http from "http";
import { NODE_ENV, PORT } from "@config";
import express from "express";
// import {
//   connectToDatabase,
//   initializeErrorHandling,
//   initializeMiddlewares,
//   initializeQuery,
//   initializeSwagger,
// } from "./init";
import routes from "./routes";
import {
  logger,
  // validateEnv
} from "./utils";

// validateEnv();

const app = express();

// eslint-disable-next-line @typescript-eslint/no-floating-promises
// connectToDatabase();
// initializeMiddlewares(app);
routes(app);
// initializeSwagger(app);
// initializeErrorHandling(app);
// setTimeout(initializeQuery, 5000);

const logsHttp = () => {
  logger.info(`=================================`);
  logger.info(`==============HTTP===============`);
  logger.info(`======= ENV: ${NODE_ENV} ========`);
  logger.info(`🚀 App listening on the port ${Number(PORT)}`);
  logger.info(`=================================`);
};

http.createServer(app).listen(Number(PORT), logsHttp);
