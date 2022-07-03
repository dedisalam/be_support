import { Service as SI } from '@interfaces/customer';
import { findAllService } from '@services/customer';
import { NextFunction, Request, Response } from 'express';

const getServices = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findAllServiceData: SI[] = await findAllService();

    res.status(200).json(findAllServiceData);
  } catch (error) {
    next(error);
  }
};

export default getServices;
