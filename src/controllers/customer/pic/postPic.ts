/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const postPic = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Post Pic');
};

export default postPic;
