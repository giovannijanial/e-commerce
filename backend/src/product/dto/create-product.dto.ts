import { IsNumber, IsObject, IsString } from 'class-validator';
import { CartEntity } from 'src/cart/entities/cart.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsObject()
  cartItems: CartEntity[];
}
