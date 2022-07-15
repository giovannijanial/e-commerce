import { CartStatus } from '../enums/CartStatus';
import { IProduct } from './Product';
import { IUser } from './User';

export interface ICartItem {
  id?: number;
  price: number;
  quantity: number;
  product: IProduct;
}
export interface ICart {
  id?: string;
  quantityProducts: number;
  total: number;
  cartStatus?: CartStatus;
  user?: IUser;
  cartProducts: ICartItem[];
}
