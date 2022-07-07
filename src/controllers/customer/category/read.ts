import { Category as CI } from '@interfaces/customer/category';
import { Read as ReadService } from '@services/customer/category';
import { NextFunction, Request, Response } from 'express';

const Read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const links = '/customer/category';

    const resultRead: CI[] = await ReadService();
    const data = resultRead.map(category => {
      return {
        id: category.id,
        name: category.name,
        links: `${links}/${category.id}`,
      };
    });

    res.status(200).json({ data, links });
  } catch (error) {
    next(error);
  }
};

export default Read;
