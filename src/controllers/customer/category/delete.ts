import { Category as CI } from '@interfaces/customer/category';
import { Delete as DeleteService } from '@services/customer/category';
import { NextFunction, Request, Response } from 'express';

const Delete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const resultDelete: CI = await DeleteService(id);

    res.status(200).json({ data: resultDelete, links: '/customer/categories' });
  } catch (error) {
    next(error);
  }
};

export default Delete;
