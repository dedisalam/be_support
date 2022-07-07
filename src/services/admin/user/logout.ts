import { ADMIN } from '@databases';
import { HttpException } from '@exceptions';
import { User } from '@interfaces/admin/user';
import { isEmpty } from '@utils';

const Logout = async (request: User): Promise<User> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not user");

  const resultFindOne: User = await ADMIN.User.findOne({ where: { email: request.email, password: request.password } });
  if (!resultFindOne) throw new HttpException(409, "You're not user");

  return resultFindOne;
};

export default Logout;
