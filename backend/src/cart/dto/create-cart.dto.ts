import { IsObject } from 'class-validator';
import { UserEntity } from 'src/user/entities/user.entity';

export class CreateCartDto {
  @IsObject()
  user: UserEntity;
}
