import { Request } from 'express';
import Interface from '@interfaces/admin/user';

export interface DataStoredInToken {
  id: number;
}

export interface TokenData {
  token: string;
  expiresIn: number;
}

export interface RequestWithUser extends Request {
  user: Interface;
}
