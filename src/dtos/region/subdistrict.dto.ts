import { IsString } from 'class-validator';

export default class Dto {
  @IsString()
  public name: string;
}
