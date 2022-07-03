import { CUSTOMER } from '@databases';
import { CreateCategoryDto as CD } from '@dtos/customer';
import { HttpException } from '@exceptions';
import { Category as CI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const createCategory = async (categoryData: CD): Promise<CI> => {
  if (isEmpty(categoryData)) throw new HttpException(400, "You're not categoryData");

  const findCategory: CI = await CUSTOMER.Category.findOne({ where: { name: categoryData.name } });
  if (findCategory) throw new HttpException(409, `Category ${categoryData.name} already exists`);

  const createCategoryData: CI = await CUSTOMER.Category.create(categoryData);
  return createCategoryData;
};

export default createCategory;
