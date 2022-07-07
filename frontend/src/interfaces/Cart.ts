import { IProduct } from './Product';
import { IUser } from './User';

export interface ICartItem {
  id: number;
  price: number;
  quantity: number;
  product: IProduct;
}
export interface ICart {
  id: string;
  quantityProducts: number;
  total: number;
  cartStatus: string;
  user: IUser;
  cartProducts: ICartItem[];
}
