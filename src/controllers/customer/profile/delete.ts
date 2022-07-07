import { Profile as PI } from '@interfaces/customer/profile';
import { Delete as DeleteService } from '@services/customer/profile';
import { NextFunction, Request, Response } from 'express';

const Delete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const resultDelete: PI = await DeleteService(id);

    res.status(200).json({ data: resultDelete, links: '/customer/profiles' });
  } catch (error) {
    next(error);
  }
};

export default Delete;
