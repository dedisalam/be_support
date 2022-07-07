import { Customer as CI } from '@interfaces/customer';
import { Create as CreateService } from '@services/customer';
import { Customer as CD } from '@dtos/customer';
import { NextFunction, Request, Response } from 'express';

const Create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const request: CD = req.body;

    const resultCreate: CI = await CreateService(request);

    res.status(201).json({ data: resultCreate });
  } catch (error) {
    next(error);
  }
};

export default Create;
