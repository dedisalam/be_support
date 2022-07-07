import { ADMIN } from '@databases';
import { HttpException } from '@exceptions';
import { User } from '@interfaces/admin/user';
import { isEmpty } from '@utils';

const Delete = async (id: number): Promise<User> => {
  if (isEmpty(id)) throw new HttpException(400, "You're not user");

  const resultFindByPk: User = await ADMIN.User.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not user");

  await ADMIN.User.destroy({ where: { id } });

  return resultFindByPk;
};

export default Delete;
