import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Category as CI } from '@interfaces/customer/category';
import { isEmpty } from '@utils';

const Delete = async (id: number): Promise<CI> => {
  if (isEmpty(id)) throw new HttpException(400, "You're not id");

  const resultFindByPk: CI = await CUSTOMER.Category.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not category");

  await CUSTOMER.Category.destroy({ where: { id } });

  return resultFindByPk;
};

export default Delete;
