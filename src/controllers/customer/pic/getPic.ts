/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const getPic = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Get Pic');
};

export default getPic;
