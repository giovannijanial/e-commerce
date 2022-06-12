import { IsNumber, IsObject } from 'class-validator';
import { Users } from 'src/auth/entities/user.entity';
import { CartEntity } from '../entities/cart.entity';

export class CreateCartDto {
  @IsNumber()
  total: number;

  @IsNumber()
  quantity: number;

  @IsObject()
  user: Users;

  @IsObject()
  cartItems: CartEntity[];
}
