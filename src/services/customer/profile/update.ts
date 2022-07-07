import { Profile as PI } from '@interfaces/customer/profile';
import { isEmpty } from '@utils';
import { CUSTOMER } from '@databases';
import { Profile as PD } from '@dtos/customer/profile';
import { HttpException } from '@exceptions';

const Update = async (id: number, request: PD): Promise<PI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindByPk: PI = await CUSTOMER.Profile.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not Profile");

  await CUSTOMER.Profile.update(request, { where: { id } });

  return resultFindByPk;
};

export default Update;
