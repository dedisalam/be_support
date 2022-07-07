import { RequestWithUser } from '@interfaces/admin/user';
import { NextFunction, Response } from 'express';

const Read = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ user: req.user });
  } catch (error) {
    next(error);
  }
};

export default Read;
