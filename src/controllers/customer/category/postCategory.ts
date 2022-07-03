import { Category as CI } from '@interfaces/customer';
import { createCategory } from '@services/customer';
import { CreateCategoryDto as CD } from 'dtos/customer';
import { NextFunction, Request, Response } from 'express';

const postCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const categoryData: CD = req.body;
    const createCategoryData: CI = await createCategory(categoryData);

    res.status(201).json(createCategoryData);
  } catch (error) {
    next(error);
  }
};

export default postCategory;
