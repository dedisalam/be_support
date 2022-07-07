import { NextFunction, Request, Response } from 'express';
import { User as UI } from '@interfaces/admin/user';
import { Read as ReadService } from '@services/admin/user';

const Read = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const links = '/admin/user';

    const resultRead: UI[] = await ReadService();

    const data = resultRead.map(user => {
      return {
        id: user.id,
        email: user.email,
        links: `${links}/${user.id}`,
      };
    });

    res.status(200).json({ data, links });
  } catch (error) {
    next(error);
  }
};

export default Read;
