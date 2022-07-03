import { Category as CI } from '@interfaces/customer';
import { findAllCategory } from '@services/customer';
import { NextFunction, Request, Response } from 'express';

const getCategories = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findAllCategoryData: CI[] = await findAllCategory();

    res.status(200).json(findAllCategoryData);
  } catch (error) {
    next(error);
  }
};

export default getCategories;
