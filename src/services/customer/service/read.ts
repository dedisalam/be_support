import { CUSTOMER } from '@databases';
import { Service as SI } from '@interfaces/customer/service';

const Read = async (): Promise<SI[]> => {
  const resultFindAll: SI[] = await CUSTOMER.Service.findAll();
  return resultFindAll;
};

export default Read;
