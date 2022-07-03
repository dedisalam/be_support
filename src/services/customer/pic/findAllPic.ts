import { CUSTOMER } from '@databases';
import { Pic as PI } from '@interfaces/customer';

const findAllPic = async (): Promise<PI[]> => {
  const all: PI[] = await CUSTOMER.Pic.findAll();
  return all;
};
export default findAllPic;
