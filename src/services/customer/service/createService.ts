import { CUSTOMER } from '@databases';
import { CreateServiceDto as SD } from '@dtos/customer';
import { HttpException } from '@exceptions';
import { Service as SI } from '@interfaces/customer';
import { isEmpty } from '@utils';

const createService = async (serviceData: SD): Promise<SI> => {
  if (isEmpty(serviceData)) throw new HttpException(400, "You're not serviceData");

  const findService: SI = await CUSTOMER.Service.findOne({ where: { name: serviceData.name } });
  if (findService) throw new HttpException(409, `Service ${serviceData.name} already exists`);

  const createServiceData: SI = await CUSTOMER.Service.create(serviceData);
  return createServiceData;
};

export default createService;
