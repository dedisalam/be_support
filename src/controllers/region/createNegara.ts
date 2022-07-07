import { NextFunction, Request, Response } from 'express';
import { CreateCountry } from '@dtos/region';
import { Country } from '@interfaces/region';
import { createCountry } from '@services/region';

const createCountry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userData: CreateCountry = req.body;
    const createCountryData: Country = await createCountry(userData);

    res.status(201).json({ data: createCountryData, message: 'created' });
  } catch (error) {
    next(error);
  }
};

export default createCountry;
