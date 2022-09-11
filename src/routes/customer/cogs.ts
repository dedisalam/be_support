import { Router } from 'express';
import Controller from '@controllers/customer/cogs';
import Dto from '@dtos/customer/cogs';
import { Routes } from '@interfaces/routes';
import validationMiddleware from '@middlewares/validation';

class Route implements Routes {
  public path = '/customer/cogs';
  public router = Router();
  public controller = new Controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.getAll);
    this.router.get(`${this.path}/:id(\\d+)`, this.controller.getById);
    this.router.post(`${this.path}`, validationMiddleware(Dto, 'body'), this.controller.create);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(Dto, 'body', true), this.controller.update);
    this.router.delete(`${this.path}/:id(\\d+)`, this.controller.delete);
  }
}

export default Route;
