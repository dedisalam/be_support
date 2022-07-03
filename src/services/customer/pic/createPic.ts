import { CUSTOMER } from '@databases';
import { CreatePicDto as PD } from '@dtos/customer';
import { HttpException } from '@exceptions';
import { Pic as PI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const createPic = async (picData: PD): Promise<PI> => {
  if (isEmpty(picData)) throw new HttpException(400, "You're not picData");

  const findPic: PI = await CUSTOMER.Pic.findOne({ where: { name: picData.name } });
  if (findPic) throw new HttpException(409, `Pic ${picData.name} already exists`);

  const createPicData: PI = await CUSTOMER.Pic.create(picData);
  return createPicData;
};

export default createPic;
