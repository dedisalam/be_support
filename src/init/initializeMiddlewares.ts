import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import { stream } from '../utils';
import { LOG_FORMAT, CREDENTIALS, ORIGIN } from '../config';

const corsOptions = {
  origin: ORIGIN,
  credentials: CREDENTIALS,
};

const initializeMiddlewares = app => {
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
