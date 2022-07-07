import { NextFunction, Request, Response } from 'express';
import { User as UD } from '@dtos/admin/user';
import { User as UI } from '@interfaces/admin/user';
import { Create as CreateService } from '@services/admin/user';

const Create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const request: UD = req.body;

    const resultCreate: UI = await CreateService(request);

    res.status(201).json({ data: resultCreate });
  } catch (error) {
    next(error);
  }
};

export default Create;
