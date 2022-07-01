import { IsNumber, IsString } from 'class-validator';

class CreateKecamatan {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public KotaKabId: number;
}

export default CreateKecamatan;
