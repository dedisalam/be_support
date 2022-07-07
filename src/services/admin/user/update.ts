import { hash } from 'bcrypt';
import { User as UI } from '@interfaces/admin/user';
import { isEmpty } from '@utils';
import { ADMIN } from '@databases';
import { User as UD } from '@dtos/admin/user';
import { HttpException } from '@exceptions';

const Update = async (id: number, request: UD): Promise<UI> => {
  if (isEmpty(request)) throw new HttpException(400, 'Bad request');

  const resultFindByPk: UI = await ADMIN.User.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not user");

  const hashedPassword = await hash(request.password, 10);
  await ADMIN.User.update({ ...request, password: hashedPassword }, { where: { id } });

  return resultFindByPk;
};

export default Update;
