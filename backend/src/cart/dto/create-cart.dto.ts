import { IsObject } from 'class-validator';
import { Users } from 'src/auth/entities/user.entity';

export class CreateCartDto {
  @IsObject()
  user: Users;
}
