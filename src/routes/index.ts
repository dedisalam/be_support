import { Router } from 'express';
import Controller from '@controllers';
import { Routes } from '@interfaces/route';

class Route implements Routes {
  public path = '/';
  public router = Router();
  public controller = new Controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.controller.index);
  }
}

export default Route;
