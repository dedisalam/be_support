import { IsString } from 'class-validator';

class CreateServiceDto {
  @IsString()
  public name: string;

  @IsString()
  public cir: string;

  @IsString()
  public desc: string;
}

export default CreateServiceDto;
