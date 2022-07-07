import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Customer as CI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const Delete = async (id: number): Promise<CI> => {
  if (isEmpty(id)) throw new HttpException(400, "You're not CustomerId");

  const resultFindByPk: CI = await CUSTOMER.Customer.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not Customer");

  await CUSTOMER.Customer.destroy({ where: { id } });

  return resultFindByPk;
};

export default Delete;
