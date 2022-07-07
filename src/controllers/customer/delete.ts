import { Customer as CI } from '@interfaces/customer';
import { Delete as DeleteService } from '@services/customer';
import { NextFunction, Request, Response } from 'express';

const Delete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const resultDelete: CI = await DeleteService(id);

    res.status(200).json({ data: resultDelete, links: '/customer/customers' });
  } catch (error) {
    next(error);
  }
};

export default Delete;
