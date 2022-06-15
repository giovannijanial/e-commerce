import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async validateUser(username: string, password: string) {
    let user;

    try {
      user = await this.userService.findOneByUserName(username);
    } catch (error) {}
    return user;
  }
}
