import { Service as SI } from '@interfaces/customer/service';
import { ReadById as ReadByIdService } from '@services/customer/service';
import { NextFunction, Request, Response } from 'express';

const ReadById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const resultReadById: SI = await ReadByIdService(id);

    res.status(200).json({ data: resultReadById });
  } catch (error) {
    next(error);
  }
};

export default ReadById;
