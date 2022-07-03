import { CUSTOMER } from '@databases';
import { Category as CI } from '@interfaces/customer';

const findAllCategory = async (): Promise<CI[]> => {
  const all: CI[] = await CUSTOMER.Category.findAll();
  return all;
};
export default findAllCategory;
