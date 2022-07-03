import { CUSTOMER } from '@databases';
import { HttpException } from '@exceptions';
import { Service as SI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const findServiceById = async (serviceId: number): Promise<SI> => {
  if (isEmpty(serviceId)) throw new HttpException(400, "You're not serviceId");

  const findService: SI = await CUSTOMER.Service.findByPk(serviceId);
  if (!findService) throw new HttpException(409, "You're not service");

  return findService;
};

export default findServiceById;
