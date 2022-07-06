import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { compareSync } from 'bcrypt';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { TokenEntity } from './entities/token.entitiy';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(TokenEntity)
    private readonly tokenRepository: Repository<TokenEntity>,
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string) {
    let user: UserEntity;

    try {
      user = await this.userService.findOneByUserName(username);
    } catch (error) {
      return null;
    }

    const isPasswordValid = compareSync(password, user.password);

    if (!isPasswordValid) return null;

    return user;
  }

  async saveToken(hash: string, username: string) {
    const token = await this.tokenRepository.findOne({ where: { username } });

    if (token) {
      this.tokenRepository.update(token.id, {
        hash,
      });
    } else {
      this.tokenRepository.insert({
        hash,
        username,
      });
    }
  }

  async login(user: any) {
    const payload = {
      sub: user.id,
      email: user.email,
      role: user.role,
    };
    const token = this.jwtService.sign(payload);

    this.saveToken(token, user.username);

    return {
      token: token,
    };
  }

  async refreshToken(oldToken: string) {
    const token = await this.tokenRepository.findOne({
      where: { hash: oldToken },
    });
    if (token) {
      const user = await this.userService.findOneByUserName(token.username);

      return this.login(user);
    } else {
      return new HttpException(
        {
          errorMessage: 'Token inválido!',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async logout() {
    return null;
  }
}
