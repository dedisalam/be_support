/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Delete Category');
};

export default deleteCategory;
