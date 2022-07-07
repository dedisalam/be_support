import { IsString } from 'class-validator';

class Pic {
  @IsString()
  public name: string;
}

export default Pic;
