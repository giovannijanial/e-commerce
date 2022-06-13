import { Module } from '@nestjs/common';
import { CartItemService } from './cart-item.service';
import { CartItemController } from './cart-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/entities/cart.entity';
import { CartItem } from './entities/cart-item.entity';
import { ProductEntity } from 'src/product/entities/product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, CartItem, ProductEntity])],
  controllers: [CartItemController],
  providers: [CartItemService],
})
export class CartItemModule {}
