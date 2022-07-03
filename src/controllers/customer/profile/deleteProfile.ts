/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const deleteProfile = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Delete Profile');
};

export default deleteProfile;
