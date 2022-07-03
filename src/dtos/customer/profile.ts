import { IsString } from 'class-validator';

class CreateProfileDto {
  @IsString()
  public name: string;

  @IsString()
  public address: string;

  @IsString()
  public telp: string;

  @IsString()
  public hp: string;

  @IsString()
  public fax: string;
}

export default CreateProfileDto;
