import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cart-item.entity';

@Injectable()
export class CartItemService {
  constructor(
    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  create() {
    return 'This action adds a new cartItem';
  }

  findAll() {
    return `This action returns all cartItem`;
  }

  async findOne(id: number) {
    const cartItem = await this.cartItemRepository.findOne({ where: { id } });
    return cartItem;
  }

  update() {
    return `This action updates a # cartItem`;
  }

  remove() {
    return `This action removes a # cartItem`;
  }
}
