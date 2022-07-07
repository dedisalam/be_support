import { CreateVillage } from '@dtos';
import { REGION } from '@databases';
import { HttpException } from '@exceptions';
import { Village } from '@interfaces';
import { isEmpty } from '@utils';

const createVillage = async (kelurahanData: CreateVillage): Promise<Village> => {
  if (isEmpty(kelurahanData)) throw new HttpException(400, "You're not userData");

  const findVillage: Village = await REGION.Village.findOne({ where: { name: kelurahanData.name } });
  if (findVillage) throw new HttpException(409, `data ${kelurahanData.name} already exists`);

  const createVillageData: Village = await REGION.Village.create({ ...kelurahanData });
  return createVillageData;
};

export default createVillage;
