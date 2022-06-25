import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos';
import { User } from '@/interfaces';
import { UserService } from '@/services';

const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = Number(req.params.id);
    const userData: CreateUserDto = req.body;
    const updateUserData: User = await new UserService().updateUser(userId, userData);

    res.status(200).json({ data: updateUserData, message: 'updated' });
  } catch (error) {
    next(error);
  }
};

export default updateUserController;
