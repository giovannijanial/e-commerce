import { Module } from '@nestjs/common';
import { CartProductService } from './cart-product.service';
import { CartProductController } from './cart-product.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/entities/cart.entity';
import { CartProductEntity } from './entities/cart-product.entity';
import { ProductEntity } from 'src/product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CartEntity, CartProductEntity, ProductEntity]),
  ],
  controllers: [CartProductController],
  providers: [CartProductService],
})
export class CartProductModule {}
