import { hash } from 'bcrypt';
import { Dto } from '@dtos/admin/user';
import { HttpException } from '@exceptions/HttpException';
import { Interface } from '@interfaces/admin/user';
import Model from '@models/admin/user';
import { isEmpty } from '@utils/util';

class Service {
  public user = Model;

  public async findAll(): Promise<Interface[]> {
    const user: Interface[] = await this.user.find();
    return user;
  }

  public async findById(id: string): Promise<Interface> {
    if (isEmpty(id)) throw new HttpException(400, 'Id is empty');

    const findOne: Interface = await this.user.findOne({ _id: id });
    if (!findOne) throw new HttpException(409, "Data doesn't exist");

    return findOne;
  }

  public async create(data: Dto): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'data is empty');

    const findOne: Interface = await this.user.findOne({ email: data.email });
    if (findOne) throw new HttpException(409, `This email ${data.email} already exists`);

    const hashedPassword = await hash(data.password, 10);
    const create: Interface = await this.user.create({ ...data, password: hashedPassword });

    return create;
  }

  public async update(id: string, data: Dto): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'data is empty');

    if (data.email) {
      const findOne: Interface = await this.user.findOne({ email: data.email });
      if (findOne && findOne._id != id) throw new HttpException(409, `This email ${data.email} already exists`);
    }

    if (data.password) {
      const hashedPassword = await hash(data.password, 10);
      data = { ...data, password: hashedPassword };
    }

    const findByIdAndUpdate: Interface = await this.user.findByIdAndUpdate(id, { data });
    if (!findByIdAndUpdate) throw new HttpException(409, "Data doesn't exist");

    return findByIdAndUpdate;
  }

  public async delete(id: string): Promise<Interface> {
    const findByIdAndDelete: Interface = await this.user.findByIdAndDelete(id);
    if (!findByIdAndDelete) throw new HttpException(409, "Data doesn't exist");

    return findByIdAndDelete;
  }
}

export default Service;
