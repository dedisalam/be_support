import { IsString } from 'class-validator';

class Service {
  @IsString()
  public name: string;

  @IsString()
  public cir: string;

  @IsString()
  public desc: string;
}

export default Service;
