import { ADMIN } from '@databases';
import { HttpException } from '@exceptions';
import { User } from '@interfaces/admin';
import { isEmpty } from '@utils';

const deleteUser = async (userId: number): Promise<User> => {
  if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

  const findUser: User = await ADMIN.User.findByPk(userId);
  if (!findUser) throw new HttpException(409, "You're not user");

  await ADMIN.User.destroy({ where: { id: userId } });

  return findUser;
};

export default deleteUser;
