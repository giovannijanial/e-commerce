import { Body, Controller, Post, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { RefreshTokenDto } from './dto/refresh.token.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req: any) {
    return await this.authService.login(req.user);
  }

  @Post('logout')
  async logout() {
    return await this.authService.logout();
  }

  @Put('refresh')
  async refreshTokens(@Body() data: RefreshTokenDto) {
    return await this.authService.refreshToken(data.oldToken);
  }
}
