import { Controller, Get, Param } from '@nestjs/common';
import { CartProductService } from './cart-product.service';

@Controller('cart-item')
export class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @Get()
  findAll() {
    return this.cartProductService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartProductService.findOne(+id);
  }
}
