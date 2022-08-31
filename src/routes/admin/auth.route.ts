import { Router } from 'express';
import Controller from '@controllers/admin/auth.controller';
import Dto from '@dtos/admin/user.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class Route implements Routes {
  public path = '/admin/user';
  public router = Router();
  public controller = new Controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post(`${this.path}/signup`, validationMiddleware(Dto, 'body'), this.controller.signUp);
    this.router.post(`${this.path}/login`, validationMiddleware(Dto, 'body'), this.controller.logIn);
    this.router.post(`${this.path}/logout`, authMiddleware, this.controller.logOut);
  }
}

export default Route;
