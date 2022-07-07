import { Customer as CI } from '@interfaces/customer';
import { isEmpty } from '@utils';
import { CUSTOMER } from '@databases';
import { Customer as CD } from '@dtos/customer';
import { HttpException } from '@exceptions';

const Update = async (id: number, request: CD): Promise<CI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindByPk: CI = await CUSTOMER.Customer.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not Customer");

  await CUSTOMER.Customer.update(request, { where: { id } });

  return resultFindByPk;
};

export default Update;
