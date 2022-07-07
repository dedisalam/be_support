import { CUSTOMER } from '@databases';
import { Profile as PD } from '@dtos/customer/profile';
import { HttpException } from '@exceptions';
import { Profile as PI } from '@interfaces/customer/profile';
import { isEmpty } from '@utils';

const Create = async (request: PD): Promise<PI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindOne: PI = await CUSTOMER.Profile.findOne({ where: { name: request.name } });
  if (resultFindOne) throw new HttpException(409, `Profile ${request.name} already exists`);

  const resultCreate: PI = await CUSTOMER.Profile.create(request);
  return resultCreate;
};

export default Create;
