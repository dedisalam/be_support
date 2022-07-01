import { CreateKotaKabDto } from '@dtos';
import { REGIONS } from '@databases';
import { HttpException } from '@exceptions';
import { KotaKabInterface } from '@interfaces';
import { isEmpty } from '@utils';

const createKotaKab = async (kotaKabData: CreateKotaKabDto): Promise<KotaKabInterface> => {
  if (isEmpty(kotaKabData)) throw new HttpException(400, "You're not userData");

  const findKotaKab: KotaKabInterface = await REGIONS.KotaKab.findOne({ where: { name: kotaKabData.name } });
  if (findKotaKab) throw new HttpException(409, `data ${kotaKabData.name} already exists`);

  const createKotaKabData: KotaKabInterface = await REGIONS.KotaKab.create(kotaKabData);
  return createKotaKabData;
};

export default createKotaKab;
