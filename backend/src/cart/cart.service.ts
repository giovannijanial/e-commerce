import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/auth/entities/user.entity';
import { CartItemService } from 'src/cart-item/cart-item.service';
import { CartItem } from 'src/cart-item/entities/cart-item.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Repository } from 'typeorm';
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

  async verifyCart(user: Users, productId: number, quantity: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id },
      relations: ['carts'],
    });

    if (!currentUser) {
      throw new NotFoundException(`User ID ${user.id} not found!`);
    }

    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException(`User ID ${productId} not found!`);
    }

    if (!currentUser.carts.length) {
      this.newCart(currentUser, product, quantity);
    }

    const currentCartID = currentUser.carts.find(
      (cart) => cart.cartStatus === CartStatus.WAITING_PAYMENT,
    );

    const currentCart = await this.findOne(currentCartID.id);

    let cart: any;
    if (!currentCart) {
      cart = await this.newCart(currentUser, product, quantity);
    } else {
      this.addItemCart(product, quantity, currentCart);
    }

    return cart;
  }

  async newCart(currentUser: Users, product: ProductEntity, quantity: number) {
    const cart = await this.cartRepository.save({
      total: product.price * quantity,
      quantityProducts: 1,
      user: currentUser,
    });
    const newItem = this.cartItemRepository.create({
      product: product,
      quantity: quantity,
      price: product.price,
    });

    this.cartItemRepository.save({ ...newItem, cart });

    return cart;
  }

  async addItemCart(
    product: ProductEntity,
    quantity: number,
    currentCart: CartEntity,
  ) {
    const currentItem = currentCart.cartItems.find(
      (cartItem) => cartItem.product.id === product.id,
    );

    if (!currentItem) {
      const newItem = this.cartItemRepository.create({
        product: product,
        cart: currentCart,
        quantity: quantity,
        price: product.price,
      });
      this.cartItemRepository.save({ ...newItem });
    } else {
      const newQuantity = currentItem.quantity + quantity;
      this.cartItemRepository.update(currentItem.id, {
        quantity: newQuantity,
      });
    }

    this.updateCart(currentCart);
  }

  async removeItemCart(id: string, itemId: number) {
    const cart = await this.findOne(id);

    if (!cart) {
      throw new NotFoundException(`Cart ID ${id} not found!`);
    }
    const cartItem = await this.cartItemRepository.findOne({
      where: { id: itemId },
    });

    return this.cartItemRepository.remove(cartItem);
  }

  async updateCart(cart: CartEntity) {
    const total = cart.cartItems
      .map((item) => item.price * item.quantity)
      .reduce((x, y) => x + y);

    const quantity = cart.cartItems.length;

    console.log(total);

    return this.cartRepository.update(cart.id, {
      total: total,
      quantityProducts: quantity,
    });
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

  async remove(id: string) {
    const cart = await this.cartRepository.find({ where: { id } });

    if (!cart) {
      throw new NotFoundException(`Cart ID ${id} not found!`);
    }

    return this.cartRepository.remove(cart);
  }
}
