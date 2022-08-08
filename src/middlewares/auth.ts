import { SECRET_KEY } from "@config";
import { ADMIN } from "@databases";
import type { DataStoredInToken, RequestWithUser } from "@interfaces/admin";
import type { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";

const authMiddleware = async (
  req: RequestWithUser,
  res: Response,
  next: NextFunction,
) => {
  try {
    const Authorization =
      req.cookies.Authorization ||
      (req.header("Authorization")
        ? req.header("Authorization").split("Bearer ")[1]
        : null);

    if (Authorization) {
      const secretKey: string = SECRET_KEY;
      const verificationResponse = verify(
        Authorization,
        secretKey,
      ) as DataStoredInToken;
      const userId = verificationResponse.id;
      const findUser = await ADMIN.User.findByPk(userId);

      if (findUser) {
        req.user = findUser;
        next();
      } else {
        res.status(401).json({ links: "/admin/user/login" });
      }
    } else {
      res.status(401).json({ links: "/admin/user/login" });
    }
  } catch (error) {
    res.status(401).json({ links: "/admin/user/login" });
  }
};

export default authMiddleware;
