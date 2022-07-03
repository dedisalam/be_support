/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const putService = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Put Service');
};

export default putService;
