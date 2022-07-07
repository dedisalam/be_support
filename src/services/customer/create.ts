import { CUSTOMER } from '@databases';
import { Customer as CD } from '@dtos/customer';
import { HttpException } from '@exceptions';
import { Customer as CI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const Create = async (request: CD): Promise<CI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindOne: CI = await CUSTOMER.Customer.findOne({ where: { name: request.name } });
  if (resultFindOne) throw new HttpException(409, `Customer ${request.name} already exists`);

  const resultCreate: CI = await CUSTOMER.Customer.create(request);
  return resultCreate;
};

export default Create;
