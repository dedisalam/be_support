import { IsString } from 'class-validator';

class Customer {
  @IsString()
  public name: string;
}

export default Customer;
