import { CreateSubDistrict } from '@dtos';
import { REGION } from '@databases';
import { HttpException } from '@exceptions';
import { SubDistrict } from '@interfaces';
import { isEmpty } from '@utils';

const createSubDistrict = async (kecamatanData: CreateSubDistrict): Promise<SubDistrict> => {
  if (isEmpty(kecamatanData)) throw new HttpException(400, "You're not userData");

  const findSubDistrict: SubDistrict = await REGION.SubDistrict.findOne({ where: { name: kecamatanData.name } });
  if (findSubDistrict) throw new HttpException(409, `data ${kecamatanData.name} already exists`);

  const createSubDistrictData: SubDistrict = await REGION.SubDistrict.create({ ...kecamatanData });
  return createSubDistrictData;
};

export default createSubDistrict;
