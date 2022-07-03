/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const getService = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Get Service');
};

export default getService;
