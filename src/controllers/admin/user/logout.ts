import { NextFunction, Response } from 'express';
import { RequestWithUser, User as UI } from '@interfaces/admin/user';
import { Logout as LogoutService } from '@services/admin/user';

const Logout = async (req: RequestWithUser, res: Response, next: NextFunction) => {
  try {
    const request: UI = req.user;

    const resultLogout: UI = await LogoutService(request);

    res.clearCookie('Authorization');
    res.status(200).json({ data: resultLogout });
  } catch (error) {
    next(error);
  }
};

export default Logout;
