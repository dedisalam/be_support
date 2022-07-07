import { Category as CI } from '@interfaces/customer/category';
import { isEmpty } from '@utils';
import { CUSTOMER } from '@databases';
import { Category as CD } from '@dtos/customer/category';
import { HttpException } from '@exceptions';

const Update = async (id: number, request: CD): Promise<CI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindByPk: CI = await CUSTOMER.Category.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not category");

  await CUSTOMER.Category.update(request, { where: { id } });

  return resultFindByPk;
};

export default Update;
