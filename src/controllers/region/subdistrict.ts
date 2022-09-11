import { NextFunction, Request, Response } from 'express';
import Interface from '@interfaces/region/subdistrict';
import Service from '@services/region/subdistrict';

class Controller {
  public service = new Service();

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAll: Interface[] = await this.service.findAll();

      res.status(200).json({ data: findAll, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const findOne: Interface = await this.service.findById(id);

      res.status(200).json({ data: findOne, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };
}

export default Controller;
