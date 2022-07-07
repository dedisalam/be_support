import { Service as SI } from '@interfaces/customer/service';
import { Delete as DeleteService } from '@services/customer/service';
import { NextFunction, Request, Response } from 'express';

const Delete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const resultDelete: SI = await DeleteService(id);

    res.status(200).json({ data: resultDelete, links: '/customer/services' });
  } catch (error) {
    next(error);
  }
};

export default Delete;
