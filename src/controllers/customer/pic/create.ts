import { Pic as PI } from '@interfaces/customer/pic';
import { Create as CreateService } from '@services/customer/pic';
import { Pic as PD } from 'dtos/customer/pic';
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
