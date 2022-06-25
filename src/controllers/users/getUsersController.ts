import { NextFunction, Request, Response } from 'express';
import { UserService } from '@/services';
import { User } from '@/interfaces';

const getUsersController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findAllUsersData: User[] = await new UserService().findAllUser();

    res.status(200).json({ data: findAllUsersData });
  } catch (error) {
    next(error);
  }
};

export default getUsersController;
