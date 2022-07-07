import { hash } from 'bcrypt';
import { ADMIN } from '@databases';
import { User as UD } from '@dtos/admin/user';
import { HttpException } from '@exceptions';
import { User as UI } from '@interfaces/admin/user';
import { isEmpty } from '@utils';

const Create = async (request: UD): Promise<UI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not user");

  const resultFindOne: UI = await ADMIN.User.findOne({ where: { email: request.email } });
  if (resultFindOne) throw new HttpException(409, `You're email ${request.email} already exists`);

  const hashedPassword = await hash(request.password, 10);

  const resultCreate: UI = await ADMIN.User.create({ ...request, password: hashedPassword });
  return resultCreate;
};

export default Create;
