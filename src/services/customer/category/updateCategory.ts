import { Category as CI } from '@interfaces/customer';
import { isEmpty } from '@utils';
import { CUSTOMER } from '@databases';
import { CreateCategoryDto as CD } from '@dtos/customer';
import { HttpException } from '@exceptions';

const updateCategory = async (categoryId: number, categoryData: CD): Promise<CI> => {
  if (isEmpty(categoryData)) throw new HttpException(400, "You're not categoryData");

  const findCategory: CI = await CUSTOMER.Category.findByPk(categoryId);
  if (!findCategory) throw new HttpException(409, "You're not category");

  await CUSTOMER.Category.update(categoryData, { where: { id: categoryId } });

  const update: CI = await CUSTOMER.Category.findByPk(categoryId);
  return update;
};

export default updateCategory;
