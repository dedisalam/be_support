import { CUSTOMER } from '@databases';
import { Customer as CI } from '@interfaces/customer';

const Read = async (): Promise<CI[]> => {
  const resultFindAll: CI[] = await CUSTOMER.Customer.findAll();
  return resultFindAll;
};
export default Read;
