import { NextFunction, Request, Response } from 'express';
import { User } from '@/interfaces';
import { UserService } from '@/services';

const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = Number(req.params.id);
    const deleteUserData: User = await new UserService().deleteUser(userId);

    res.status(200).json({ data: deleteUserData, message: 'deleted' });
  } catch (error) {
    next(error);
  }
};

export default deleteUserController;
