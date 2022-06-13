import { IsEmail, IsNumber, IsObject, IsString } from 'class-validator';
import { CartEntity } from 'src/cart/entities/cart.entity';

export class CreateUserDto {
  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

  @IsNumber()
  age: number;

  @IsString()
  role: string;

  @IsObject({ each: true })
  cartItems: CartEntity[];
}
