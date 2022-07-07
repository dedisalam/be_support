import { Service as SI } from '@interfaces/customer/service';
import { isEmpty } from '@utils';
import { CUSTOMER } from '@databases';
import { Service as SD } from '@dtos/customer/service';
import { HttpException } from '@exceptions';

const Update = async (id: number, request: SD): Promise<SI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindByPk: SI = await CUSTOMER.Service.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not ");

  await CUSTOMER.Service.update(request, { where: { id } });

  return resultFindByPk;
};

export default Update;
