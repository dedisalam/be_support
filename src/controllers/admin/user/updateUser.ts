import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos';
import { User } from '@interfaces/admin';
import { updateUser as updateUserSU } from '@services/admin/user';

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = Number(req.params.id);
    const userData: CreateUserDto = req.body;
    const updateUserData: User = await updateUserSU(userId, userData);

    res.status(200).json({ data: updateUserData, message: 'updated' });
  } catch (error) {
    next(error);
  }
};

export default updateUser;
