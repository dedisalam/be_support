import { Request } from 'express';

type User = {
  email: string;
  password: string;
};

type DataStoredInToken = {
  id: number;
};

type TokenData = {
  token: string;
  expiresIn: number;
};

type RequestWithUser = Request & {
  user: User;
};

export { User, DataStoredInToken, TokenData, RequestWithUser };
