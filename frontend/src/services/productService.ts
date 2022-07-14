import { IProduct } from '../interfaces/Product';
import { Api } from '../providers';

const getAll = () => Api.get<IProduct[]>('product');
const getOne = (id: number) => Api.get<IProduct>(`product/${id}`);
const getByCategory = (category: string) =>
  Api.get<IProduct[]>(`product/categories/${category}`);
const search = (query: string) =>
  Api.get<IProduct[]>(`product/search?q=${query}`);
const create = (product: IProduct) => Api.post<IProduct>('product', product);
const update = (id: number, product: IProduct) =>
  Api.patch<IProduct>(`product/${id}`, product);
const remove = (id: number) => Api.delete<IProduct>(`product/${id}`);

export const ProductService = {
  getAll,
  getOne,
  getByCategory,
  search,
  create,
  update,
  remove
};
