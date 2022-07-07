import { Pic as PD } from '@dtos/customer/pic';
import { Pic as PI } from '@interfaces/customer/pic';
import { Update as UpdateService } from '@services/customer/pic';
import { NextFunction, Request, Response } from 'express';

const Update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const request: PD = req.body;

    const resultUpdate: PI = await UpdateService(id, request);

    res.status(200).json({ data: resultUpdate });
  } catch (error) {
    next(error);
  }
};

export default Update;
