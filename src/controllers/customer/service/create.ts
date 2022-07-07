import { NextFunction, Request, Response } from 'express';
import { Service as SD } from '@dtos/customer/service';
import { Service as SI } from '@interfaces/customer/service';
import { Create as CreateService } from '@services/customer/service';

const Create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const request: SD = req.body;

    const resultCreate: SI = await CreateService(request);

    res.status(201).json({ data: resultCreate });
  } catch (error) {
    next(error);
  }
};

export default Create;
