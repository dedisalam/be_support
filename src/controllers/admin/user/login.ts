import { NextFunction, Request, Response } from 'express';
import { User as UD } from '@dtos/admin/user';
import { Login as LoginService, CreateCookie } from '@services/admin/user';

const Login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const request: UD = req.body;

    const { token, user } = await LoginService(request);
    CreateCookie(res, token);

    res.status(200).json({ data: user });
  } catch (error) {
    next(error);
  }
};

export default Login;
