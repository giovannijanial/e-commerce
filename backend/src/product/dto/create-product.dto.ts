import { IsNumber, IsObject, IsString } from 'class-validator';
import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsObject()
  cartItems: CartProductEntity[];
}
