import { NextFunction, Request, Response } from 'express';
import { User } from '@interfaces/admin';
import { getUsers as getUsersSU } from '@services/admin/user';

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findAllUsersData: User[] = await getUsersSU();

    res.status(200).json({ data: findAllUsersData });
  } catch (error) {
    next(error);
  }
};

export default getUsers;
