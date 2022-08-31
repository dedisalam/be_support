import { compare, hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import ADMIN from '@databases/admin';
import Dto from '@dtos/admin/user';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/admin/auth';
import Interface from '@interfaces/admin/user';
import { isEmpty } from '@utils/util';

class Service {
  public table = ADMIN.User;

  public async signup(data: Dto): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'Data is empty');

    const find: Interface = await this.table.findOne({ where: { email: data.email } });
    if (find) throw new HttpException(409, `This ${data.email} already exists`);

    const hashedPassword = await hash(data.password, 10);
    const create: Interface = await this.table.create({ ...data, password: hashedPassword });

    return create;
  }

  public async login(data: Dto): Promise<{ cookie: string; findUser: Interface }> {
    if (isEmpty(data)) throw new HttpException(400, 'Data is empty');

    const find: Interface = await this.table.findOne({ where: { email: data.email } });
    if (!find) throw new HttpException(409, `This ${data.email} was not found`);

    const isPasswordMatching: boolean = await compare(data.password, find.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password not matching');

    const tokenData = this.createToken(find);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser: find };
  }

  public async logout(data: Interface): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'Data is empty');

    const find: Interface = await this.table.findOne({ where: { email: data.email, password: data.password } });
    if (!find) throw new HttpException(409, "User doesn't exist");

    return find;
  }

  public createToken(user: Interface): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default Service;
