import { IsObject, IsString } from 'class-validator';
import { UserEntity } from 'src/user/entities/user.entity';
import { CartStatus } from '../entities/cart.entity';

export class CreateCartDto {
  @IsObject()
  user: UserEntity;

  @IsString()
  cartStatus: CartStatus;
}
