import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Category as CI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const findCategoryById = async (categoryId: number): Promise<CI> => {
  if (isEmpty(categoryId)) throw new HttpException(400, "You're not categoryId");

  const findCategory: CI = await CUSTOMER.Category.findByPk(categoryId);
  if (!findCategory) throw new HttpException(409, "You're not category");

  return findCategory;
};

export default findCategoryById;
