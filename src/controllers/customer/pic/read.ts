import { Pic as PI } from '@interfaces/customer/pic';
import { Read as ReadService } from '@services/customer/pic';
import { NextFunction, Request, Response } from 'express';

const Read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const links = '/customer/pic';

    const resultRead: PI[] = await ReadService();
    const data = resultRead.map(pic => {
      return {
        id: pic.id,
        name: pic.name,
        links: `${links}${pic.id}`,
      };
    });

    res.status(200).json({ data, links });
  } catch (error) {
    next(error);
  }
};

export default Read;
