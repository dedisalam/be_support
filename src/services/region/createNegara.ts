import { CreateCountry } from '@dtos/regions';
import { REGION } from '@databases';
import { HttpException } from '@exceptions';
import { Country } from '@interfaces/region';
import { isEmpty } from '@utils';

const createCountry = async (negaraData: CreateCountry): Promise<Country> => {
  if (isEmpty(negaraData)) throw new HttpException(400, "You're not userData");

  const findCountry: Country = await REGION.Country.findOne({ where: { name: negaraData.name } });
  if (findCountry) throw new HttpException(409, `data ${negaraData.name} already exists`);

  const createCountryData: Country = await REGION.Country.create({ ...negaraData });
  return createCountryData;
};

export default createCountry;
