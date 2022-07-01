import { NextFunction, Response } from 'express';
import { RequestWithUser, User } from '@interfaces/admin';
import { logout as logoutSU } from '@services/admin/user';

const logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const userData: User = req.user;
    const logOutUserData: User = await logoutSU(userData);

    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    res.status(200).json({ data: logOutUserData, message: 'logout' });
  } catch (error) {
    next(error);
  }
};

export default logOut;
