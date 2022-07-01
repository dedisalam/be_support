import { IsNumber, IsString } from 'class-validator';

class CreateProvinsi {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public NegaraId: number;
}

export default CreateProvinsi;
