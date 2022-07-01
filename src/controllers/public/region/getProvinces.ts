import { NextFunction, Request, Response } from 'express';
import { getProvinces as getProvincesSM } from '@services/public/region';

const getProvinces = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getProvincesSM();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getProvinces;
