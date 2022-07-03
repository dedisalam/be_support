/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const getCategory = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Get Category');
};

export default getCategory;
