import { IsNumber } from 'class-validator';

export class CreateCartProductDto {
  @IsNumber()
  quantity: number;
}
