import { IsNumber, IsObject, IsString } from 'class-validator';
import { CartItemEntity } from 'src/cart-item/entities/cart-item.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsObject()
  cartItems: CartItemEntity[];
}
