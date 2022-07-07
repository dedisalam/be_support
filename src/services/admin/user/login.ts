import { compare } from 'bcrypt';
import { ADMIN } from '@databases';
import { User as UD } from '@dtos/admin/user';
import { HttpException } from '@exceptions';
import { Token, User as UI } from '@interfaces/admin/user';
import { isEmpty } from '@utils';
import CreateToken from './createToken';

const Login = async (request: UD): Promise<{ token: Token; user: UI }> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not userData");

  const resultFindOne: UI = await ADMIN.User.findOne({ where: { email: request.email } });
  if (!resultFindOne) throw new HttpException(409, `You're email ${request.email} not found`);

  const isPasswordMatching: boolean = await compare(request.password, resultFindOne.password);
  if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

  const token = CreateToken(resultFindOne);

  return { token, user: resultFindOne };
};

export default Login;
