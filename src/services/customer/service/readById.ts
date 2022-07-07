import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Service as SI } from '@interfaces/customer/service';
import { isEmpty } from '@utils';

const ReadById = async (id: number): Promise<SI> => {
  if (isEmpty(id)) throw new HttpException(400, "You're not id");

  const resultFindByPk: SI = await CUSTOMER.Service.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not service");

  return resultFindByPk;
};

export default ReadById;
