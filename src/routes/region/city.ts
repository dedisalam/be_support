import { Router } from 'express';
import Controller from '@controllers/region/city';
import { Routes } from '@interfaces/routes';

class Route implements Routes {
  public path = '/region/city';
  public router = Router();
  public controller = new Controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/region/cities', this.controller.getAll);
    this.router.get(`${this.path}/:id(\\d+)`, this.controller.getById);
  }
}

export default Route;
