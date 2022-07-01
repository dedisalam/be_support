import { CreateNegaraDto } from '@dtos';
import { REGIONS } from '@databases';
import { HttpException } from '@exceptions';
import { NegaraInterface } from '@interfaces';
import { isEmpty } from '@utils';

const createNegara = async (negaraData: CreateNegaraDto): Promise<NegaraInterface> => {
  if (isEmpty(negaraData)) throw new HttpException(400, "You're not userData");

  const findNegara: NegaraInterface = await REGIONS.Negara.findOne({ where: { name: negaraData.name } });
  if (findNegara) throw new HttpException(409, `data ${negaraData.name} already exists`);

  const createNegaraData: NegaraInterface = await REGIONS.Negara.create({ ...negaraData });
  return createNegaraData;
};

export default createNegara;
