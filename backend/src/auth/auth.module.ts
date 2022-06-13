import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/entities/cart.entity';
import { Users } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CartEntity, Users])],
  providers: [UserService],
  controllers: [UserController],
})
export class AuthModule {}
