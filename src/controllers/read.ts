import type { Request, Response } from "@interfaces";

const Read = (req: Request, res: Response) => {
  res.sendStatus(200);
};

export default Read;
