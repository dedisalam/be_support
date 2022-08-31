import { Router } from 'express';
import Controller from '@controllers/region/subdistrict.controller';
import Dto from '@dtos/region/subdistrict.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class Route implements Routes {
  public path = '/region/subdistrict';
  public router = Router();
  public controller = new Controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}s`, this.controller.getAll);
    this.router.get(`${this.path}/:id(\\d+)`, this.controller.getById);
    this.router.post(`${this.path}`, validationMiddleware(Dto, 'body'), this.controller.create);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(Dto, 'body', true), this.controller.update);
    this.router.delete(`${this.path}/:id(\\d+)`, this.controller.delete);
  }
}

export default Route;
