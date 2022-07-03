/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';

const postService = async (req: Request, res: Response, next: NextFunction) => {
  res.send('Post Service');
};

export default postService;
