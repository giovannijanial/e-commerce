import { Users } from 'src/auth/entities/user.entity';
import { CartItemEntity } from 'src/cart-item/entities/cart-item.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CartEntity {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  total: number;

  @Column()
  quantity: number;

  @ManyToOne(() => Users, (user) => user.username)
  @JoinColumn()
  user: Users;

  @OneToMany(() => CartItemEntity, (cartItems) => cartItems.id)
  @JoinColumn()
  cartItems: CartItemEntity[];
}
