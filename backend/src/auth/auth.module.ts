import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { localStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      privateKey: 'abcd123456789',
      signOptions: { expiresIn: '1year' },
    }),
    ConfigModule.forRoot(),
    UserModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, localStrategy, JwtStrategy],
})
export class AuthModule {}
