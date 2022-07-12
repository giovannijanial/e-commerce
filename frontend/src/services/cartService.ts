import { ICart } from '../interfaces/Cart';
import { Api } from '../providers';

const getAll = () => Api.get<ICart[]>('cart');
const getOne = (id: string) => Api.get<ICart>(`cart/${id}`);
const create = (cart: ICart) => Api.post<ICart>('cart', cart);
const update = (id: string, cart: ICart) =>
  Api.patch<ICart>(`cart/${id}`, cart);
const remove = (id: string) => Api.delete<ICart>(`cart/${id}`);

export const CartService = {
  getAll,
  getOne,
  create,
  update,
  remove
};
