import { IsNumber, IsString } from 'class-validator';

class Village {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;

  @IsNumber()
  public SubDistrictId: number;
}

export default Village;
