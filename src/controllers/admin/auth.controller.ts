import { NextFunction, Request, Response } from 'express';
import Dto from '@dtos/admin/user.dto';
import Interface from '@interfaces/admin/user.interface';
import { RequestWithUser } from '@interfaces/admin/auth.interface';
import Service from '@services/admin/auth.service';

class Controller {
  public service = new Service();

  public signUp = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Dto = req.body;
      const signUp: Interface = await this.service.signup(data);

      res.status(201).json({ data: signUp, message: 'signup' });
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
      const logOut: Interface = await this.service.logout(data);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOut, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default Controller;
