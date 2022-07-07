import { ICart } from '../interfaces/Cart';
import { Api } from '../providers';

const getAll = () => Api.get<ICart[]>('cart');
const getOne = (id: string) => Api.get<ICart>(`cart/${id}`);
const post = (cart: ICart) => Api.post<ICart>('cart', cart);

export const CartService = {
  getAll,
  getOne,
  post
};
