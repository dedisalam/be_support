import { Router } from 'express';
import Controller from '@controllers/admin/user';
import { Dto } from '@dtos/admin/user';
import { Routes } from '@interfaces/route';
import validationMiddleware from '@middlewares/validation';

class Route implements Routes {
  public path = '/admin/user';
  public router = Router();
  public controller = new Controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}s`, this.controller.getAll);
    this.router.get(`${this.path}/:id`, this.controller.getById);
    this.router.post(`${this.path}`, validationMiddleware(Dto, 'body'), this.controller.create);
    this.router.put(`${this.path}/:id`, validationMiddleware(Dto, 'body', true), this.controller.update);
    this.router.delete(`${this.path}/:id`, this.controller.delete);
  }
}

export default Route;
