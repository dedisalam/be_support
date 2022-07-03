import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos';
import { login as loginSU, createCookie } from '@services/admin/user';

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: CreateUserDto = req.body;
    const { tokenData, findUser } = await loginSU(userData);

    createCookie(res, tokenData);
    res.status(200).json({ data: findUser, message: 'login' });
  } catch (error) {
    next(error);
  }
};

export default logIn;
