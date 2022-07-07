import { Category as CD } from '@dtos/customer/category';
import { Category as CI } from '@interfaces/customer/category';
import { Update as UpdateService } from '@services/customer/category';
import { NextFunction, Request, Response } from 'express';

const Update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const request: CD = req.body;

    const resultUpdate: CI = await UpdateService(id, request);

    res.status(200).json({ data: resultUpdate });
  } catch (error) {
    next(error);
  }
};

export default Update;
