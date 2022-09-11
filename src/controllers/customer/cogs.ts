import { NextFunction, Request, Response } from 'express';
import Dto from '@dtos/customer/cogs';
import Interface from '@interfaces/customer/cogs';
import Service from '@services/customer/cogs';

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

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data: Dto = req.body;
      const create: Interface = await this.service.create(data);

      res.status(201).json({ data: create, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const data: Dto = req.body;
      const update: Interface = await this.service.update(id, data);

      res.status(200).json({ data: update, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = Number(req.params.id);
      const deleteData: Interface = await this.service.delete(id);

      res.status(200).json({ data: deleteData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default Controller;
