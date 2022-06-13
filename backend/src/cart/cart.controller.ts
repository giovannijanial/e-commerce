import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CartService } from './cart.service';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addToCart(@Body() body) {
    const { productId, quantity, user } = body;
    return this.cartService.verifyCart(user, productId, quantity);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(id);
  }

  @Delete(':id/:itemId')
  remove(@Param('id') id: string, @Param('itemId') itemId: number) {
    return this.cartService.removeItemCart(id, itemId);
  }
}
