import { NextFunction, Request, Response } from 'express';
import { getCities as getCitiesSM } from '@services/public/region';

const getCities = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await getCitiesSM(id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getCities;
