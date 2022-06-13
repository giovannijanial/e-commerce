import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/auth/entities/user.entity';
import { CartItem } from 'src/cart-item/entities/cart-item.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateCartDto } from './dto/update-cart.dto';
import { CartEntity, CartStatus } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,

    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,

    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(CartItem)
    private readonly cartItemRepository: Repository<CartItem>,
  ) {}

  async addToCart(userId: Users, productId: number, quantity: number) {
    const user = await this.userRepository.findOne({
      where: { id: userId.id },
      relations: ['carts'],
    });

    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException(`User ID ${productId} not found!`);
    }

    if (!user.carts.length) {
      const cart = await this.cartRepository.save({
        total: product.price * quantity,
        quantityProducts: 1,
        user: user,
      });
      const newItem = this.cartItemRepository.create({
        product: product,
        quantity: quantity,
        price: product.price,
      });

      console.log(cart);

      this.cartItemRepository.save({ ...newItem, cart });
    } else {
      const currentCartId = user.carts.filter(
        (cart) => cart.cartStatus === CartStatus.WAITING_PAYMENT,
      );

      const currentCart = await this.findOne(currentCartId[0].id);

      const newItem = this.cartItemRepository.create({
        product: product,
        cart: currentCart,
        quantity: quantity,
        price: product.price,
      });

      console.log(currentCart);

      this.cartItemRepository.save({ ...newItem });
    }
  }

  findAll() {
    return this.cartRepository.find({
      relations: ['user', 'cartItems', 'cartItems.product'],
    });
  }

  findOne(id: string) {
    const cart = this.cartRepository.findOne({
      where: { id },
      relations: ['user', 'cartItems', 'cartItems.product'],
    });

    if (!cart) {
      throw new NotFoundException(`Cart ID ${id} not found!`);
    }
    return cart;
  }

  update(id: string, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  async remove(id: string) {
    const cart = await this.cartRepository.find({ where: { id } });

    if (!cart) {
      throw new NotFoundException(`Cart ID ${id} not found!`);
    }

    return this.cartRepository.remove(cart);
  }

  // async verifyCartStatus(cart: CartEntity) {}
}
