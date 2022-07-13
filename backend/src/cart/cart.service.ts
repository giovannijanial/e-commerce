import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { UserEntity } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CartEntity, CartStatus } from './entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity)
    private readonly cartRepository: Repository<CartEntity>,

    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,

    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,

    @InjectRepository(CartProductEntity)
    private readonly cartProductRepository: Repository<CartProductEntity>,
  ) {}

  async verifyCart(user: UserEntity, productId: number, quantity: number) {
    const currentUser = await this.userRepository.findOne({
      where: { id: user.id },
      relations: ['carts'],
    });

    if (!currentUser) {
      throw new NotFoundException(`Not found!`);
    }

    const product = await this.productRepository.findOne({
      where: { id: productId },
    });

    if (!product) {
      throw new NotFoundException(`User ID ${productId} not found!`);
    }

    if (!currentUser.carts.length) {
      return this.newCart(currentUser, product, quantity);
    }

    const currentCartID = currentUser.carts.find(
      (cart) => cart.cartStatus === CartStatus.WAITING_PAYMENT,
    );

    const currentCart = await this.findOne(currentCartID.id);

    if (!currentCart) {
      return this.newCart(currentUser, product, quantity);
    } else {
      return this.addItemCart(product, quantity, currentCart);
    }
  }

  async newCart(
    currentUser: UserEntity,
    product: ProductEntity,
    quantity: number,
  ) {
    const cart = await this.cartRepository.save({
      total: product.price * quantity,
      quantityProducts: 1,
      user: currentUser,
    });
    const newItem = this.cartProductRepository.create({
      product: product,
      quantity: quantity,
      price: product.price,
    });

    this.cartProductRepository.save({ ...newItem, cart });

    return cart;
  }

  async addItemCart(
    product: ProductEntity,
    quantity: number,
    currentCart: CartEntity,
  ) {
    const currentItem = currentCart.cartProducts.find(
      (CartProduct) => CartProduct.product.id === product.id,
    );

    if (!currentItem) {
      const newItem = this.cartProductRepository.create({
        product: product,
        cart: currentCart,
        quantity: quantity,
        price: product.price,
      });
      await this.cartProductRepository.save({ ...newItem });
    } else {
      const newQuantity = currentItem.quantity + quantity;
      await this.cartProductRepository.update(currentItem.id, {
        quantity: newQuantity,
      });
    }

    return this.updateCart(currentCart.id);
  }

  async removeItemCart(id: string, itemId: number) {
    const cart = await this.findOne(id);

    if (!cart) {
      throw new NotFoundException(`Cart ID ${id} not found!`);
    }
    const cartProduct = await this.cartProductRepository.findOne({
      where: { id: itemId },
    });
    if (!cartProduct) {
      throw new NotFoundException(`Item ID ${id} not found!`);
    }
    const removedItem = await this.cartProductRepository.remove(cartProduct);
    await this.updateCart(cart.id);
    return removedItem;
  }

  async updateCart(cartId: string) {
    const cart = await this.findOne(cartId);
    if (cart.cartProducts.length) {
      const total = cart.cartProducts
        .map((item) => item.price * item.quantity)
        .reduce((x, y) => x + y);

      const quantity = cart.cartProducts.length;

      return this.cartRepository.update(cart.id, {
        total: total,
        quantityProducts: quantity,
      });
    }
    return this.cartRepository.remove(cart);
  }

  findAll() {
    return this.cartRepository.find({
      relations: ['user', 'cartProducts', 'cartProducts.product'],
    });
  }

  findOne(id: string) {
    const cart = this.cartRepository.findOne({
      where: { id },
      relations: ['user', 'cartProducts', 'cartProducts.product'],
    });
    if (!cart) {
      throw new NotFoundException(`Cart ID ${id} not found!`);
    }
    return cart;
  }

  async remove(id: string) {
    const cart = await this.findOne(id);

    if (!cart) {
      throw new NotFoundException(`Cart ID ${id} not found!`);
    }

    for (const cartProduct of cart.cartProducts) {
      await this.cartProductRepository.remove(cartProduct);
    }

    return this.cartRepository.remove(cart);
  }
}
