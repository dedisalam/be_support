import { IsString } from 'class-validator';

class CreatePicDto {
  @IsString()
  public name: string;
}

export default CreatePicDto;
