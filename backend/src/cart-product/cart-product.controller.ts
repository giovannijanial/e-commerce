import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { UpdateCartProductDto } from './dto/update-cart-product.dto';

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

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCartProductDto: UpdateCartProductDto,
  ) {
    return this.cartProductService.update(+id, updateCartProductDto);
  }
}
