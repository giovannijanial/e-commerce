import { CartProductEntity } from 'src/cart-product/entities/cart-product.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.entity';

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

  @ManyToMany(() => CategoryEntity, (category) => category.products, {
    cascade: true,
  })
  @JoinTable()
  categories: CategoryEntity[];

  @OneToMany(() => CartProductEntity, (cartIterms) => cartIterms.product)
  @JoinColumn({ name: 'product_id' })
  cartProducts: CartProductEntity[];
}
