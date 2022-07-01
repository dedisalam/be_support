import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/admin';
import { getUserById as getUserByIdSU } from '@services/admin/user';

const getUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = Number(req.params.id);
    const findOneUserData: User = await getUserByIdSU(userId);

    res.status(200).json({ data: findOneUserData, message: 'findOne' });
  } catch (error) {
    next(error);
  }
};

export default getUserById;
