import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CartEntity,
      UserEntity,
      CartProductEntity,
      ProductEntity,
    ]),
  ],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
