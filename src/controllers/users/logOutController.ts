import { NextFunction, Response } from 'express';
import { RequestWithUser, User } from '@/interfaces';
import { AuthService } from '@/services';

const logOutController = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const userData: User = req.user;
    const logOutUserData: User = await new AuthService().logout(userData);

    res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
    res.status(200).json({ data: logOutUserData, message: 'logout' });
  } catch (error) {
    next(error);
  }
};

export default logOutController;
