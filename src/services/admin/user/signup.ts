import { hash } from 'bcrypt';
import { ADMIN } from '@databases';
import { CreateUserDto } from '@dtos';
import { HttpException } from '@exceptions';
import { User } from '@interfaces/admin';
import { isEmpty } from '@utils';

const signup = async (userData: CreateUserDto): Promise<User> => {
  if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  const findUser: User = await ADMIN.User.findOne({ where: { email: userData.email } });
  if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

  const hashedPassword = await hash(userData.password, 10);
  const createUserData: User = await ADMIN.User.create({ ...userData, password: hashedPassword });

  return createUserData;
};

export default signup;
