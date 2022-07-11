import { IProduct } from '../interfaces/Product';
import { Api } from '../providers';

const getAll = () => Api.get<IProduct[]>('product');
const getOne = (id: number) => Api.get<IProduct>(`product/${id}`);
const create = (product: IProduct) => Api.post<IProduct>('product', product);
const update = (id: number, product: IProduct) =>
  Api.patch<IProduct>(`product/${id}`, product);
const remove = (id: number) => Api.delete<IProduct>(`product/${id}`);

export const ProductService = {
  getAll,
  getOne,
  create,
  update,
  remove
};
