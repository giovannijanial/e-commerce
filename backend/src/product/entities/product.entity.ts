import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'product' })
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

  @OneToMany(() => CartProductEntity, (cartIterms) => cartIterms.product)
  @JoinColumn({ name: 'product_id' })
  cartProducts: CartProductEntity[];
}
