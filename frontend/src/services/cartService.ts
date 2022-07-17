import { ICart, ICartItem } from '../interfaces/Cart';
import { Api } from '../providers';

const getAll = () => Api.get<ICart[]>('cart');
const getOne = (id: string) => Api.get<ICart>(`cart/${id}`);
const create = (body: any) => Api.post<ICart>('cart', body);
const update = (id: string, cart: ICart) =>
  Api.patch<ICart>(`cart/${id}`, cart);
const remove = (id: string) => Api.delete<ICart>(`cart/${id}`);
const removeProduct = (id: string, idProduct: number) =>
  Api.delete<ICartItem>(`cart/${id}/${idProduct}`);

export const CartService = {
  getAll,
  getOne,
  create,
  update,
  remove,
  removeProduct
};
