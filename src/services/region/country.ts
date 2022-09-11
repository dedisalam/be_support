import REGION from '@databases/region';
import { HttpException } from '@exceptions/HttpException';
import Interface from '@interfaces/region/country';
import { isEmpty } from '@utils/util';

class Service {
  public table = REGION.Country;

  public async findAll(): Promise<Interface[]> {
    const all: Interface[] = await this.table.findAll();
    return all;
  }

  public async findById(id: number): Promise<Interface> {
    if (isEmpty(id)) throw new HttpException(400, 'Id is empty');

    const find: Interface = await this.table.findByPk(id);
    if (!find) throw new HttpException(409, "Country doesn't exist");

    return find;
  }
}

export default Service;
