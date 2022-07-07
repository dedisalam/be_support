import { Service as SD } from '@dtos/customer/service';
import { Service as SI } from '@interfaces/customer/service';
import { Update as UpdateService } from '@services/customer/service';
import { NextFunction, Request, Response } from 'express';

const put = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = Number(req.params.id);
    const request: SD = req.body;

    const resultUpdate: SI = await UpdateService(id, request);

    res.status(200).json({ data: resultUpdate });
  } catch (error) {
    next(error);
  }
};

export default put;
