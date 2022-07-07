import { CUSTOMER } from '@databases';
import { Service as SD } from '@dtos/customer/service';
import { HttpException } from '@exceptions';
import { Service as SI } from '@interfaces/customer/service';
import { isEmpty } from '@utils';

const Create = async (request: SD): Promise<SI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindOne: SI = await CUSTOMER.Service.findOne({ where: { name: request.name } });
  if (resultFindOne) throw new HttpException(409, ` ${request.name} already exists`);

  const resultCreate: SI = await CUSTOMER.Service.create(request);
  return resultCreate;
};

export default Create;
