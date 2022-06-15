import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';
import { ProductEntity } from './entities/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, CartProductEntity])],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
