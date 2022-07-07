import { IsNumber, IsString } from 'class-validator';

class Province {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public CountryId: number;
}

export default Province;
