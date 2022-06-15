import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsString,
  //Matches,
} from 'class-validator';
import { CartEntity } from 'src/cart/entities/cart.entity';
//import { MessageHelper } from 'src/helpers/messages.helper';
//import { RegexHelper } from 'src/helpers/regex.helper';

export class CreateUserDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  username: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  //@Matches(RegexHelper.password, {
  //  message: MessageHelper.message,
  //})
  password: string;

  @IsNumber()
  age: number;

  @IsString()
  role: string;

  @IsObject({ each: true })
  carts: CartEntity[];
}
