import { CartEntity } from 'src/cart/entities/cart.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'cart_product' })
export class CartProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => ProductEntity, (product) => product.cartProducts)
  product: ProductEntity;

  @ManyToOne(() => CartEntity, (cart) => cart.cartProducts)
  cart: CartEntity;
}
