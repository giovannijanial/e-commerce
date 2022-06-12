import { CartItemEntity } from 'src/cart-item/entities/cart-item.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updateAt: string;

  @OneToMany(() => CartItemEntity, (cartIterms) => cartIterms.id)
  @JoinColumn()
  cartItems: CartItemEntity[];
}
