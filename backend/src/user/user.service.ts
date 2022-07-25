import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }

  async findAll() {
    return this.userRepository.find({ relations: ['carts'] });
  }

  async findOneByUserName(username: string) {
    const user = await this.userRepository.findOne({
      where: { username },
      relations: ['carts'],
    });

    if (!user) {
      throw new NotFoundException(`Username ${username} not found!`);
    }
    return user;
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['carts', 'carts.cartProducts', 'carts.cartProducts.product'],
    });

    if (!user) {
      throw new NotFoundException(`User ID ${id} not found!`);
    }
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    await this.findOne(id);

    return this.userRepository.update(id, { ...updateUserDto });
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    return this.userRepository.remove(user);
  }
}
