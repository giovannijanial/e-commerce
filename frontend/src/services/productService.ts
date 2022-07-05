import { IProduct } from '../interfaces/Product';
import { Api } from '../providers';

const getAll = () => Api.get<IProduct[]>('product');
const getOne = (id: number) => Api.get<IProduct>(`product/${id}`);
const post = (product: IProduct) => Api.post<IProduct>('product', product);

export const ProductService = {
  getAll,
  getOne,
  post
};
