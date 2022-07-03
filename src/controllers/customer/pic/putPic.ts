/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const putPic = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Put Pic');
};

export default putPic;
