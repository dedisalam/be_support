import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { DataStoredInToken, TokenData, User } from '@interfaces/admin';

const createToken = (user: User): TokenData => {
  const dataStoredInToken: DataStoredInToken = { id: user.id };
  const secretKey: string = SECRET_KEY;
  const expiresIn: number = 60 * 60;

  return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
};

export default createToken;
