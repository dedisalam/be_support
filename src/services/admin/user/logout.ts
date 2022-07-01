import { ADMIN } from '@databases';
import { HttpException } from '@exceptions';
import { User } from '@interfaces/admin';
import { isEmpty } from '@utils';

const logout = async (userData: User): Promise<User> => {
  if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

  const findUser: User = await ADMIN.User.findOne({ where: { email: userData.email, password: userData.password } });
  if (!findUser) throw new HttpException(409, "You're not user");

  return findUser;
};

export default logout;
