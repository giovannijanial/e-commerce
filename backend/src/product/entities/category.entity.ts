import { ProductEntity } from 'src/product/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'categorie' })
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => ProductEntity, (product) => product.categories)
  products: ProductEntity[];
}
