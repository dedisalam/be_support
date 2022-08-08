import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import { CREDENTIALS, LOG_FORMAT, ORIGIN } from "../config";
import { stream } from "../utils";

const corsOptions = {
  origin: ORIGIN,
  credentials: CREDENTIALS,
};

const initializeMiddlewares = (app) => {
  app.use(morgan(LOG_FORMAT, { stream }));
  app.use(cors(corsOptions));
  app.use(hpp());
  app.use(helmet());
  app.use(compression());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
};

export default initializeMiddlewares;
