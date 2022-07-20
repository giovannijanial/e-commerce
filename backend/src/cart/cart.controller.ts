import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { UpdateCartProductDto } from 'src/cart-product/dto/update-cart-product.dto';
import { CartService } from './cart.service';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  addToCart(@Body() body: any) {
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
  removeItem(@Param('id') id: string, @Param('itemId') itemId: number) {
    return this.cartService.removeItemCart(id, itemId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Param('itemId') itemId: number,
    updateCartProductDto: UpdateCartProductDto,
  ) {
    return this.cartService.update(id, itemId, updateCartProductDto);
  }
}
