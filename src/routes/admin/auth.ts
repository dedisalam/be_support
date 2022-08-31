import { Router } from 'express';
import Controller from '@controllers/admin/auth';
import Dto from '@dtos/admin/user';
import { Routes } from '@interfaces/routes';
import authMiddleware from '@middlewares/auth';
import validationMiddleware from '@middlewares/validation';

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
