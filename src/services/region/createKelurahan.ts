import { CreateKelurahanDto } from '@dtos';
import { REGIONS } from '@databases';
import { HttpException } from '@exceptions';
import { KelurahanInterface } from '@interfaces';
import { isEmpty } from '@utils';

const createKelurahan = async (kelurahanData: CreateKelurahanDto): Promise<KelurahanInterface> => {
  if (isEmpty(kelurahanData)) throw new HttpException(400, "You're not userData");

  const findKelurahan: KelurahanInterface = await REGIONS.Kelurahan.findOne({ where: { name: kelurahanData.name } });
  if (findKelurahan) throw new HttpException(409, `data ${kelurahanData.name} already exists`);

  const createKelurahanData: KelurahanInterface = await REGIONS.Kelurahan.create({ ...kelurahanData });
  return createKelurahanData;
};

export default createKelurahan;
