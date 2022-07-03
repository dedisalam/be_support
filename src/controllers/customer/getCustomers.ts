import { Request, Response } from 'express';

const getCustomers = async (req: Request, res: Response) => {
  const data = [
    { title: 'Category', links: '/customer/categories' },
    { title: 'PIC', links: '/customer/pics' },
    { title: 'Profile', links: '/customer/profiles' },
    { title: 'Service', links: '/customer/services' },
  ];
  res.status(200).json(data);
};

export default getCustomers;
