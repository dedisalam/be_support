import { CUSTOMER } from '@databases';
import { Pic as PI } from '@interfaces/customer/pic';

const Read = async (): Promise<PI[]> => {
  const resultFindAll: PI[] = await CUSTOMER.Pic.findAll();
  return resultFindAll;
};
export default Read;
