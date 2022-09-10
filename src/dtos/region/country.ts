import { IsNumber, IsString } from 'class-validator';

export default class Dto {
  @IsNumber()
  public id?: number;

  @IsString()
  public name: string;
}
