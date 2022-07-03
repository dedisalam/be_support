/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const putCategory = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Categories');
};

export default putCategory;
