import { Pic as PI } from '@interfaces/customer/pic';
import { isEmpty } from '@utils';
import { CUSTOMER } from '@databases';
import { Pic as PD } from '@dtos/customer/pic';
import { HttpException } from '@exceptions';

const Update = async (id: number, request: PD): Promise<PI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindByPk: PI = await CUSTOMER.Pic.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not pic");

  await CUSTOMER.Pic.update(request, { where: { id } });

  return resultFindByPk;
};

export default Update;
