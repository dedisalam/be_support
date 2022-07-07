import { Service as SI } from '@interfaces/customer/service';
import { Read as ReadService } from '@services/customer/service';
import { NextFunction, Request, Response } from 'express';

const Read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const links = '/customer/service';

    const resultRead: SI[] = await ReadService();
    const data = resultRead.map(service => {
      return {
        id: service.id,
        name: service.name,
        links: `${links}/${service.id}`,
      };
    });

    res.status(200).json({ data, links });
  } catch (error) {
    next(error);
  }
};

export default Read;
