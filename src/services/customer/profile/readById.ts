import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Profile as PI } from '@interfaces/customer/profile';
import { isEmpty } from '@utils';

const ReadById = async (id: number): Promise<PI> => {
  if (isEmpty(id)) throw new HttpException(400, "You're not id");

  const resultFindByPk: PI = await CUSTOMER.Profile.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not profile");

  return resultFindByPk;
};

export default ReadById;
