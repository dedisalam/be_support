import { NextFunction, Request, Response } from 'express';
import { User as UD } from '@dtos/admin/user';
import { User as UI } from '@interfaces/admin/user';
import { Update as UpdateService } from '@services/admin/user';

const Update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const request: UD = req.body;

    const resultUpdate: UI = await UpdateService(id, request);

    res.status(200).json({ data: resultUpdate });
  } catch (error) {
    next(error);
  }
};

export default Update;
