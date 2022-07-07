import { NextFunction, Request, Response } from 'express';
import { User as UI } from '@interfaces/admin/user';
import { ReadById as ReadByIdService } from '@services/admin/user';

const ReadById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);

    const resultReadById: UI = await ReadByIdService(id);

    res.status(200).json({ data: resultReadById });
  } catch (error) {
    next(error);
  }
};

export default ReadById;
