import { IsArray, IsNumber, IsObject, IsString } from 'class-validator';
import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';
import { CategoryEntity } from '../entities/category.entity';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  price: number;

  @IsNumber()
  quantity: number;

  @IsString()
  image: string;

  @IsArray()
  categories: CategoryEntity[];

  @IsObject()
  cartItems: CartProductEntity[];
}
