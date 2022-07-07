import { CreateProvince } from '@dtos';
import { REGION } from '@databases';
import { HttpException } from '@exceptions';
import { Province } from '@interfaces';
import { isEmpty } from '@utils';

const createProvince = async (provinsiData: CreateProvince): Promise<Province> => {
  if (isEmpty(provinsiData)) throw new HttpException(400, "You're not userData");

  const findProvince: Province = await REGION.Province.findOne({ where: { name: provinsiData.name } });
  if (findProvince) throw new HttpException(409, `data ${provinsiData.name} already exists`);

  const createProvinceData: Province = await REGION.Province.create(provinsiData);
  return createProvinceData;
};

export default createProvince;
