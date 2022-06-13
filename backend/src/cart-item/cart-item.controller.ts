import { Controller, Get, Param } from '@nestjs/common';
import { CartItemService } from './cart-item.service';

@Controller('cart-item')
export class CartItemController {
  constructor(private readonly cartItemService: CartItemService) {}

  @Get()
  findAll() {
    return this.cartItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartItemService.findOne(+id);
  }
}
