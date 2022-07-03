/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const deleteService = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Delete Service');
};

export default deleteService;
