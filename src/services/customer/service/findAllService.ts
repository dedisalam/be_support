import { CUSTOMER } from '@databases';
import { Service as SI } from '@interfaces/customer';

const findAllService = async (): Promise<SI[]> => {
  const all: SI[] = await CUSTOMER.Service.findAll();
  return all;
};
export default findAllService;
