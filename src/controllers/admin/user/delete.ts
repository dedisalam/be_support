import { NextFunction, Request, Response } from 'express';
import { User as UI } from '@interfaces/admin/user';
import { Delete as DeleteService } from '@services/admin/user';

const Delete = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const resultDelete: UI = await DeleteService(id);

    res.status(200).json({ data: resultDelete });
  } catch (error) {
    next(error);
  }
};

export default Delete;
