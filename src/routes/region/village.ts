import { Router } from 'express';
import Controller from '@controllers/region/village';
import { Routes } from '@interfaces/routes';

class Route implements Routes {
  public path = '/region/village';
  public router = Router();
  public controller = new Controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}s`, this.controller.getAll);
    this.router.get(`${this.path}/:id(\\d+)`, this.controller.getById);
  }
}

export default Route;
