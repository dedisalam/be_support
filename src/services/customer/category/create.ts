import { CUSTOMER } from '@databases';
import { Category as CD } from '@dtos/customer/category';
import { HttpException } from '@exceptions';
import { Category as CI } from '@interfaces/customer/category';
import { isEmpty } from '@utils';

const Create = async (request: CD): Promise<CI> => {
  if (isEmpty(request)) throw new HttpException(400, "You're not request");

  const resultFindOne: CI = await CUSTOMER.Category.findOne({ where: { name: request.name } });
  if (resultFindOne) throw new HttpException(409, `Category ${request.name} already exists`);

  const resultCreate: CI = await CUSTOMER.Category.create(request);
  return resultCreate;
};

export default Create;
