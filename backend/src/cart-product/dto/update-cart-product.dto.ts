import { PartialType } from '@nestjs/mapped-types';
import { CreateCartProductDto } from './create-cart-product.dto';

export class UpdateCartProductDto extends PartialType(CreateCartProductDto) {}
