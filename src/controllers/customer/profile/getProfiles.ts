import { Profile as PI } from '@interfaces/customer';
import { findAllProfile } from '@services/customer';
import { NextFunction, Request, Response } from 'express';

const getProfiles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const findAllProfileData: PI[] = await findAllProfile();

    res.status(200).json(findAllProfileData);
  } catch (error) {
    next(error);
  }
};

export default getProfiles;
