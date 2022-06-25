import { NextFunction, Request, Response } from 'express';
import { User } from '@/interfaces';
import { UserService } from '@/services';

const getUserByIdController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = Number(req.params.id);
    const findOneUserData: User = await new UserService().findUserById(userId);

    res.status(200).json({ data: findOneUserData, message: 'findOne' });
  } catch (error) {
    next(error);
  }
};

export default getUserByIdController;
