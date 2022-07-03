/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const putProfile = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Put Profile');
};

export default putProfile;
