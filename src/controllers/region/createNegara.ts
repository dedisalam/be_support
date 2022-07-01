import { NextFunction, Request, Response } from 'express';
import { CreateNegaraDto } from '@dtos';
import { NegaraInterface } from '@interfaces';
import { createNegaraService } from '@services';

const createNegara = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: CreateNegaraDto = req.body;
    const createNegaraData: NegaraInterface = await createNegaraService(userData);

    res.status(201).json({ data: createNegaraData, message: 'created' });
  } catch (error) {
    next(error);
  }
};

export default createNegara;
