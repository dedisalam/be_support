import { IsNumber, IsString } from 'class-validator';

class Country {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;
}

export default Country;
