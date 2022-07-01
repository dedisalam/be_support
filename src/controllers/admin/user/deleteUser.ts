import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/admin';
import { deleteUser as deleteUserSU } from '@services/admin/user';

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = Number(req.params.id);
    const deleteUserData: User = await deleteUserSU(userId);

    res.status(200).json({ data: deleteUserData, message: 'deleted' });
  } catch (error) {
    next(error);
  }
};

export default deleteUser;
