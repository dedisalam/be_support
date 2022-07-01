import { IsNumber, IsString } from 'class-validator';

class CreateKotaKab {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public ProvinsiId: number;
}

export default CreateKotaKab;
