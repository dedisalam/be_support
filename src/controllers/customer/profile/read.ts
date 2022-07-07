import { Profile as PI } from '@interfaces/customer/profile';
import { Read as ReadService } from '@services/customer/profile';
import { NextFunction, Request, Response } from 'express';

const Read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const links = '/customer/profile';

    const resultRead: PI[] = await ReadService();
    const data = resultRead.map(profile => {
      return {
        id: profile.id,
        name: profile.name,
        links: `${links}/${profile.id}`,
      };
    });

    res.status(200).json({ data, links });
  } catch (error) {
    next(error);
  }
};

export default Read;
