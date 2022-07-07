import { Pic as PI } from '@interfaces/customer/pic';
import { ReadById as ReadByIdService } from '@services/customer/pic';
import { NextFunction, Request, Response } from 'express';

const getPic = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const resultReadById: PI = await ReadByIdService(id);

    res.status(200).json({ data: resultReadById });
  } catch (error) {
    next(error);
  }
};

export default getPic;
