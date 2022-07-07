import { CUSTOMER } from '@databases';
import { Category as CI } from '@interfaces/customer/category';

const Read = async (): Promise<CI[]> => {
  const resultFindAll: CI[] = await CUSTOMER.Category.findAll();
  return resultFindAll;
};

export default Read;
