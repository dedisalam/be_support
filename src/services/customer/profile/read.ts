import { CUSTOMER } from '@databases';
import { Profile as PI } from '@interfaces/customer/profile';

const Read = async (): Promise<PI[]> => {
  const resultFindAll: PI[] = await CUSTOMER.Profile.findAll();
  return resultFindAll;
};
export default Read;
