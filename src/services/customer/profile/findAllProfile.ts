import { CUSTOMER } from '@databases';
import { Profile as PI } from '@interfaces/customer';

const findAllProfile = async (): Promise<PI[]> => {
  const all: PI[] = await CUSTOMER.Profile.findAll();
  return all;
};
export default findAllProfile;
