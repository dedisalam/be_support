import { NextFunction, Request, Response } from 'express';
import { getCountry as getCountrySM } from '@services/public/region';

const getCountry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getCountrySM();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getCountry;
