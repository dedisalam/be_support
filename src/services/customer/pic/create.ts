import { CUSTOMER } from '@databases';
import { Pic as PD } from '@dtos/customer/pic';
import { HttpException } from '@exceptions';
import { Pic as PI } from '@interfaces/customer/pic';
import { isEmpty } from '@utils';

const Create = async (request: PD): Promise<PI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindOne: PI = await CUSTOMER.Pic.findOne({ where: { name: request.name } });
  if (resultFindOne) throw new HttpException(409, `${request.name} already exists`);

  const resultCreate: PI = await CUSTOMER.Pic.create(request);
  return resultCreate;
};

export default Create;
