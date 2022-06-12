import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/auth/entities/user.entity';
import { CartItemEntity } from 'src/cart-item/entities/cart-item.entity';
import { In, Repository } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,

    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,

    @InjectRepository(CartItemEntity)
    private readonly cartItemRepository: Repository<CartItemEntity>,
  ) {}

  async create(createCartDto: CreateCartDto) {
    const cart = this.cartRepository.create(createCartDto);
    return this.cartRepository.save(cart);
  }

  findAll() {
    return this.cartRepository.find({ relations: ['user', 'cartItems'] });
  }

  findOne(id: string) {
    return `This action returns a #${id} cart`;
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
