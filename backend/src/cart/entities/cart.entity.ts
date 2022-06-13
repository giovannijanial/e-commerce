import { Users } from 'src/auth/entities/user.entity';
import { CartItem } from 'src/cart-item/entities/cart-item.entity';
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

export enum CartStatus {
  WAITING_PAYMENT = 'waitingPayment',
  PAYD = 'payd',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}
@Entity()
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

  @ManyToOne(() => Users, (user) => user.carts)
  user: Users;

  @OneToMany(() => CartItem, (cartItems) => cartItems.cart)
  @JoinColumn({ name: 'cart_id' })
  cartItems: CartItem[];

  @BeforeInsert()
  generatedId() {
    if (this.id) {
      return;
    }
    this.id = uuidv4();
  }
}
