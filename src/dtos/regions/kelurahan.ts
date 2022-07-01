import { IsNumber, IsString } from 'class-validator';

class CreateKelurahan {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public KecamatanId: number;
}

export default CreateKelurahan;
