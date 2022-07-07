import { Customer as CI } from '@interfaces/customer';
import { Read as ReadService } from '@services/customer';
import { NextFunction, Request, Response } from 'express';

const Read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const links = '/customer';

    const resultRead: CI[] = await ReadService();
    const data = resultRead.map(customer => {
      return {
        id: customer.id,
        name: customer.name,
        links: `${links}/${customer.id}`,
      };
    });
    const menu = [
      { id: 1, title: 'Category', links: `${links}/categories` },
      { id: 2, title: 'Person In Charge', links: `${links}/pics` },
      { id: 3, title: 'Profile', links: `${links}/profiles` },
      { id: 4, title: 'Service', links: `${links}/services` },
    ];

    res.status(200).json({ data, menu, links });
  } catch (error) {
    next(error);
  }
};

export default Read;
