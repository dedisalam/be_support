import { hash } from 'bcrypt';
import ADMIN from '@databases/admin';
import Dto from '@dtos/admin/user.dto';
import { HttpException } from '@exceptions/HttpException';
import Interface from '@interfaces/admin/user.interface';
import { isEmpty } from '@utils/util';

class Service {
  public table = ADMIN.User;

  public async findAll(): Promise<Interface[]> {
    const all: Interface[] = await this.table.findAll();
    return all;
  }

  public async findById(id: number): Promise<Interface> {
    if (isEmpty(id)) throw new HttpException(400, 'Id is empty');

    const find: Interface = await this.table.findByPk(id);
    if (!find) throw new HttpException(409, "User doesn't exist");

    return find;
  }

  public async create(data: Dto): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'Data is empty');

    const find: Interface = await this.table.findOne({ where: { email: data.email } });
    if (find) throw new HttpException(409, `This ${data.email} already exists`);

    const hashedPassword = await hash(data.password, 10);
    const create: Interface = await this.table.create({ ...data, password: hashedPassword });
    return create;
  }

  public async update(id: number, data: Dto): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'Data is empty');

    const find: Interface = await this.table.findByPk(id);
    if (!find) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(data.password, 10);
    await this.table.update({ ...data, password: hashedPassword }, { where: { id: id } });

    const update: Interface = await this.table.findByPk(id);
    return update;
  }

  public async delete(id: number): Promise<Interface> {
    if (isEmpty(id)) throw new HttpException(400, "Id doesn't exist");

    const find: Interface = await this.table.findByPk(id);
    if (!find) throw new HttpException(409, "User doesn't exist");

    await this.table.destroy({ where: { id: id } });

    return find;
  }
}

export default Service;
