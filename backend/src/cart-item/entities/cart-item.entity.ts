import { CartEntity } from 'src/cart/entities/cart.entity';
import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CartItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @ManyToOne(() => ProductEntity, (product) => product.cartItems)
  product: ProductEntity;

  @ManyToOne(() => CartEntity, (cart) => cart.cartItems)
  cart: CartEntity;
}
