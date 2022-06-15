import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartProductEntity } from './entities/cart-product.entity';

@Injectable()
export class CartProductService {
  constructor(
    @InjectRepository(CartProductEntity)
    private readonly cartProductRepository: Repository<CartProductEntity>,
  ) {}

  create() {
    return 'This action adds a new CartProduct';
  }

  findAll() {
    return `This action returns all CartProduct`;
  }

  async findOne(id: number) {
    const CartProduct = await this.cartProductRepository.findOne({
      where: { id },
    });
    return CartProduct;
  }

  update() {
    return `This action updates a # CartProduct`;
  }

  remove() {
    return `This action removes a # CartProduct`;
  }
}
