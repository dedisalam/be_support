import { Pic as PI } from '@interfaces/customer';
import { findAllPic } from '@services/customer';
import { NextFunction, Request, Response } from 'express';

const getPics = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findAllPicData: PI[] = await findAllPic();

    res.status(200).json(findAllPicData);
  } catch (error) {
    next(error);
  }
};

export default getPics;
