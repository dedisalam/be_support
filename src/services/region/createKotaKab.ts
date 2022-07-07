import { CreateCity } from '@dtos';
import { REGION } from '@databases';
import { HttpException } from '@exceptions';
import { City } from '@interfaces';
import { isEmpty } from '@utils';

const createCity = async (kotaKabData: CreateCity): Promise<City> => {
  if (isEmpty(kotaKabData)) throw new HttpException(400, "You're not userData");

  const findCity: City = await REGION.City.findOne({ where: { name: kotaKabData.name } });
  if (findCity) throw new HttpException(409, `data ${kotaKabData.name} already exists`);

  const createCityData: City = await REGION.City.create(kotaKabData);
  return createCityData;
};

export default createCity;
