import type { Request, Response } from "@interfaces";

const Read = (req: Request, res: Response) => {
  res.status(200).json({
    message: "Read",
  });
};

export default Read;
