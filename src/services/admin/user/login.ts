import { compare } from 'bcrypt';
import { ADMIN } from '@databases';
import { CreateUserDto } from '@dtos';
import { HttpException } from '@exceptions';
import { TokenData, User } from '@interfaces/admin';
import { isEmpty } from '@utils';
import createToken from './createToken';

const login = async (userData: CreateUserDto): Promise<{ tokenData: TokenData; findUser: User }> => {
  if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  const findUser: User = await ADMIN.User.findOne({ where: { email: userData.email } });
  if (!findUser) throw new HttpException(409, `You're email ${userData.email} not found`);

  const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
  if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

  const tokenData = createToken(findUser);

  return { tokenData, findUser };
};

export default login;
