import { NextFunction, Request, Response } from 'express';
import { getSubDistricts as getSubDistrictsSM } from '@services/public/region';

const getSubDistricts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await getSubDistrictsSM(id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getSubDistricts;
