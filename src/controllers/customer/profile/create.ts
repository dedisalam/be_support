import { Profile as PI } from '@interfaces/customer/profile';
import { Create as CreateService } from '@services/customer/profile';
import { Profile as PD } from '@dtos/customer/profile';
import { NextFunction, Request, Response } from 'express';

const Create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const request: PD = req.body;

    const resultCreate: PI = await CreateService(request);

    res.status(201).json({ data: resultCreate });
  } catch (error) {
    next(error);
  }
};

export default Create;
