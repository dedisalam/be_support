import { IsNumber, IsString } from 'class-validator';

class City {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public ProvinceId: number;
}

export default City;
