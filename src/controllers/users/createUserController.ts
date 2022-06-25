import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos';
import { User } from '@/interfaces';
import { UserService } from '@/services';

const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: CreateUserDto = req.body;
    const createUserData: User = await new UserService().createUser(userData);

    res.status(201).json({ data: createUserData, message: 'created' });
  } catch (error) {
    next(error);
  }
};

export default createUserController;
