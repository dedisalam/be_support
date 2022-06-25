import { ADMIN } from '@/databases';
import { HttpException } from '@/exceptions';
import { User } from '@/interfaces';
import { isEmpty } from '@/utils';

const findUserByIdService = async (userId: number): Promise<User> => {
  if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

  const findUser: User = await ADMIN.Users.findByPk(userId);
  if (!findUser) throw new HttpException(409, "You're not user");

  return findUser;
};

export default findUserByIdService;
