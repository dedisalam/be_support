import { CreateProvinsiDto } from '@dtos';
import { REGIONS } from '@databases';
import { HttpException } from '@exceptions';
import { ProvinsiInterface } from '@interfaces';
import { isEmpty } from '@utils';

const createProvinsi = async (provinsiData: CreateProvinsiDto): Promise<ProvinsiInterface> => {
  if (isEmpty(provinsiData)) throw new HttpException(400, "You're not userData");

  const findProvinsi: ProvinsiInterface = await REGIONS.Provinsi.findOne({ where: { name: provinsiData.name } });
  if (findProvinsi) throw new HttpException(409, `data ${provinsiData.name} already exists`);

  const createProvinsiData: ProvinsiInterface = await REGIONS.Provinsi.create(provinsiData);
  return createProvinsiData;
};

export default createProvinsi;
