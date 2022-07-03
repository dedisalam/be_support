import { IsString, IsEmail } from 'class-validator';

class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}

export default CreateUserDto;
