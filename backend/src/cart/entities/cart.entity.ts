import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';
import { v4 as uuidv4 } from 'uuid';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from 'src/user/entities/user.entity';

export enum CartStatus {
  WAITING_PAYMENT = 'waitingPayment',
  PAYD = 'payd',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}
@Entity({ name: 'cart' })
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  total: number;

  @Column()
  quantityProducts: number;

  @Column({
    type: 'simple-enum',
    enum: CartStatus,
    default: CartStatus.WAITING_PAYMENT,
  })
  cartStatus: CartStatus;

  @ManyToOne(() => UserEntity, (user) => user.carts)
  user: UserEntity;

  @OneToMany(() => CartProductEntity, (cartProducts) => cartProducts.cart)
  @JoinColumn({ name: 'cart_id' })
  cartProducts: CartProductEntity[];

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }
    this.id = uuidv4();
  }
}
