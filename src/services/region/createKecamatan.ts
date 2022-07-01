import { CreateKecamatanDto } from '@dtos';
import { REGIONS } from '@databases';
import { HttpException } from '@exceptions';
import { KecamatanInterface } from '@interfaces';
import { isEmpty } from '@utils';

const createKecamatan = async (kecamatanData: CreateKecamatanDto): Promise<KecamatanInterface> => {
  if (isEmpty(kecamatanData)) throw new HttpException(400, "You're not userData");

  const findKecamatan: KecamatanInterface = await REGIONS.Kecamatan.findOne({ where: { name: kecamatanData.name } });
  if (findKecamatan) throw new HttpException(409, `data ${kecamatanData.name} already exists`);

  const createKecamatanData: KecamatanInterface = await REGIONS.Kecamatan.create({ ...kecamatanData });
  return createKecamatanData;
};

export default createKecamatan;
