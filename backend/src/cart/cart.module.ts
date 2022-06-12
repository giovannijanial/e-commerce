import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from './entities/cart.entity';
import { Users } from 'src/auth/entities/user.entity';
import { CartItemEntity } from 'src/cart-item/entities/cart-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, Users, CartItemEntity])],
  controllers: [CartController],
  providers: [CartService],
})
export class CartModule {}
