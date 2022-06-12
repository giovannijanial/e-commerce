import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CartItemModule } from './cart-item/cart-item.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    AuthModule,
    CartModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'ecommerceDB',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ProductModule,
    CartItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
