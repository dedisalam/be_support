import { NextFunction, Request, Response } from 'express';
import { getGroups as getGroupsSM } from '@services/public/mikrotik';

const getGroups = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await getGroupsSM();
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getGroups;
