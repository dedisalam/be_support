import { NextFunction, Request, Response } from 'express';
import { Dto } from '@dtos/admin/user';
import { RequestWithUser } from '@interfaces/admin/auth';
import { Interface } from '@interfaces/admin/user';
import Service from '@services/admin/auth';

class Controller {
  public service = new Service();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Dto = req.body;
      const signup: Interface = await this.service.signup(data);

      res.status(201).json({ data: signup, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Dto = req.body;
      const { cookie, findUser } = await this.service.login(data);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
      const data: Interface = req.user;
      const logout: Interface = await this.service.logout(data);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logout, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default Controller;
