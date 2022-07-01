import { NextFunction, Request, Response } from 'express';
import { getProductById as getProductByIdSM } from '@services/public/mikrotik';

const getProductById = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const data = await getProductByIdSM(id);
    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export default getProductById;
