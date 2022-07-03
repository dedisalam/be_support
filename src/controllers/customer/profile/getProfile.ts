/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Get Profile');
};

export default getProfile;
