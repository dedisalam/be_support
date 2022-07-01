import { NextFunction, Request, Response } from 'express';
import { getProductsByGroup as getProductsByGroupSM } from '@services/public/mikrotik';

const getProductsByGroup = async (req: Request, res: Response, next: NextFunction) => {
  const { group } = req.params;

  try {
    const data = await getProductsByGroupSM(group);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getProductsByGroup;
