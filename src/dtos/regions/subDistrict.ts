import { IsNumber, IsString } from 'class-validator';

class SubDistrict {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public CityId: number;
}

export default SubDistrict;
