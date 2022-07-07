import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Pic as PI } from '@interfaces/customer/pic';
import { isEmpty } from '@utils';

const Delete = async (id: number): Promise<PI> => {
  if (isEmpty(id)) throw new HttpException(400, "You're not id");

  const resultFindByPk: PI = await CUSTOMER.Pic.findByPk(id);
  if (!resultFindByPk) throw new HttpException(409, "You're not Pic");

  await CUSTOMER.Pic.destroy({ where: { id } });

  return resultFindByPk;
};

export default Delete;
