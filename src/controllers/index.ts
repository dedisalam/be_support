import { NextFunction, Request, Response } from 'express';

class Controller {
  public index = (req: Request, res: Response, next: NextFunction) => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default Controller;
