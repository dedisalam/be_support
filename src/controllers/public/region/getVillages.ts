import { NextFunction, Request, Response } from 'express';
import { getVillages as getVillagesSM } from '@services/public/region';

const getVillages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const data = await getVillagesSM(id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getVillages;
