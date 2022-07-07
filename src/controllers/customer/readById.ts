import { Customer as CI } from '@interfaces/customer';
import { ReadById as ReadByIdService } from '@services/customer';
import { NextFunction, Request, Response } from 'express';

const ReadById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const resultReadById: CI = await ReadByIdService(id);

    res.status(200).json({ data: resultReadById });
  } catch (error) {
    next(error);
  }
};

export default ReadById;
