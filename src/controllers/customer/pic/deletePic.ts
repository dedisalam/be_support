/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const deletePic = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Delete Pic');
};

export default deletePic;
