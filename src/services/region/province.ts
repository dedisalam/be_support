import REGION from '@databases/region';
import Dto from '@dtos/region/province';
import { HttpException } from '@exceptions/HttpException';
import Interface from '@interfaces/region/province';
import { isEmpty } from '@utils/util';
import Data from '@data/region/provinces.json';

class Service {
  public table = REGION.Province;

  public async findAll(): Promise<Interface[]> {
    const all: Interface[] = await this.table.findAll();
    return all;
  }

  public async findById(id: number): Promise<Interface> {
    if (isEmpty(id)) throw new HttpException(400, 'Id is empty');

    const find: Interface = await this.table.findByPk(id);
    if (!find) throw new HttpException(409, "Province doesn't exist");

    return find;
  }

  public async create(data: Dto): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'Data is empty');

    const find: Interface = await this.table.findOne({ where: { id: data.id } });
    if (find) throw new HttpException(409, `This ${data.name} already exists`);

    const create: Interface = await this.table.create({ ...data });
    return create;
  }

  public async update(id: number, data: Dto): Promise<Interface> {
    if (isEmpty(data)) throw new HttpException(400, 'Data is empty');

    const find: Interface = await this.table.findByPk(id);
    if (!find) throw new HttpException(409, "Province doesn't exist");

    await this.table.update({ ...data }, { where: { id: id } });

    const update: Interface = await this.table.findByPk(id);
    return update;
  }

  public async delete(id: number): Promise<Interface> {
    if (isEmpty(id)) throw new HttpException(400, "Id doesn't exist");

    const find: Interface = await this.table.findByPk(id);
    if (!find) throw new HttpException(409, "Province doesn't exist");

    await this.table.destroy({ where: { id: id } });

    return find;
  }

  public async initialData() {
    await this.table.bulkCreate(Data);
  }
}

export default Service;
