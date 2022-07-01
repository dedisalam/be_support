import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos';
import { User } from '@interfaces/admin';
import { createUser as createUserSU } from '@services/admin/user';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: CreateUserDto = req.body;
    const createUserData: User = await createUserSU(userData);

    res.status(201).json({ data: createUserData, message: 'created' });
  } catch (error) {
    next(error);
  }
};

export default createUser;
