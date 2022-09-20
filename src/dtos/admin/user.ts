import { IsEmail, IsString } from 'class-validator';

export class Dto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}
