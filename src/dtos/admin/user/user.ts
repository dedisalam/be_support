/* eslint-disable import/prefer-default-export */
import { IsString, IsEmail } from 'class-validator';

class User {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;
}

export default User;
