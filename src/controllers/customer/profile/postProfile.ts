/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const postProfile = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Post Profile');
};

export default postProfile;