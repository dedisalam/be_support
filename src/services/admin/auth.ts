import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { Dto } from '@dtos/admin/user';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/admin/auth';
import { Interface } from '@interfaces/admin/user';
import Model from '@models/admin/user';
import { isEmpty } from '@utils/util';

class Service {
  public user = Model;

  public async signup(data: Dto): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'Data is empty');

    const findOne: Interface = await this.user.findOne({ email: data.email });
    if (findOne) throw new HttpException(409, `This email ${data.email} already exists`);

    const hashedPassword = await hash(data.password, 10);
    const create: Interface = await this.user.create({ ...data, password: hashedPassword });

    return create;
  }

  public async login(data: Dto): Promise<{ cookie: string; findUser: Interface }> {
    if (isEmpty(data)) throw new HttpException(400, 'data is empty');

    const findOne: Interface = await this.user.findOne({ email: data.email });
    if (!findOne) throw new HttpException(409, `This email ${data.email} was not found`);

    const isPasswordMatching: boolean = await compare(data.password, findOne.password);
    if (!isPasswordMatching) throw new HttpException(409, 'Password is not matching');

    const tokenData = this.createToken(findOne);
    const cookie = this.createCookie(tokenData);

    return { cookie, findUser: findOne };
  }

  public async logout(data: Interface): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'data is empty');

    const findOne: Interface = await this.user.findOne({ email: data.email, password: data.password });
    if (!findOne) throw new HttpException(409, `This email ${data.email} was not found`);

    return findOne;
  }

  public createToken(user: Interface): TokenData {
    const dataStoredInToken: DataStoredInToken = { _id: user._id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default Service;
