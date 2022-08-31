import { IsString, IsEmail } from 'class-validator';

export default class Dto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
