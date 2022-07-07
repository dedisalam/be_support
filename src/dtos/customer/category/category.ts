import { IsString } from 'class-validator';

class Category {
  @IsString()
  public name: string;
}

export default Category;
