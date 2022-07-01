import { IsNumber, IsString } from 'class-validator';

class CreateNegara {
  @IsNumber()
  public id: number;

  @IsString()
  public name: string;
}

export default CreateNegara;
