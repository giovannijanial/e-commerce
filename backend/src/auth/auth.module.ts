import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { localStrategy } from './strategies/local.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenEntity } from './entities/token.entitiy';

@Module({
  imports: [
    JwtModule.register({
      privateKey: 'abcd123456789',
      signOptions: { expiresIn: '1year' },
    }),
    ConfigModule.forRoot(),
    UserModule,
    PassportModule,
    TypeOrmModule.forFeature([TokenEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthService, localStrategy, JwtStrategy],
})
export class AuthModule {}
