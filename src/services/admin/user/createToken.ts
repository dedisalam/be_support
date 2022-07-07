import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { DataStoredInToken, Token, User } from '@interfaces/admin/user';

const CreateToken = (request: User): Token => {
  const dataStoredInToken: DataStoredInToken = { id: request.id };
  const secretKey: string = SECRET_KEY;
  const expiresIn: number = 60 * 60;

  return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
};

export default CreateToken;
