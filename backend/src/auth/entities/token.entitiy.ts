import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tokens' })
export class TokenEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  hash: string;

  @Column()
  username: string;
}
