import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Pic as PI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const findPicById = async (picId: number): Promise<PI> => {
  if (isEmpty(picId)) throw new HttpException(400, "You're not picId");

  const findPic: PI = await CUSTOMER.Pic.findByPk(picId);
  if (!findPic) throw new HttpException(409, "You're not pic");

  return findPic;
};

export default findPicById;
