import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@/dtos';
import { AuthService } from '@/services';

const logInController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: CreateUserDto = req.body;
    const { cookie, findUser } = await new AuthService().login(userData);

    res.setHeader('Set-Cookie', [cookie]);
    res.status(200).json({ data: findUser, message: 'login' });
  } catch (error) {
    next(error);
  }
};

export default logInController;
