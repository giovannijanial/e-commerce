import { ICategory, IProduct, IProductPage } from '../interfaces/Product';
import { Api } from '../providers';

const getAll = (page: number) => Api.get<IProductPage>(`product?page=${page}`);

const getOne = (id: number) => Api.get<IProduct>(`product/${id}`);

const getImage = (image: string) =>
  Api.get(`product/image/${image}`, {
    responseType: 'arraybuffer'
  });

const getByCategory = (category: string) =>
  Api.get<ICategory>(`product/categories/${category}`);

const getTopProducts = () => Api.get<IProduct[]>('product/top-rating');

const getLastChanged = () => Api.get<IProduct[]>('product/last-changed');

const search = (query: string) =>
  Api.get<IProduct[]>(`product/search?q=${query}`);
const create = (product: IProduct) => Api.post<IProduct>('product', product);

const uploadImage = (data: FormData) =>
  Api.post<IProduct>('product/upload', data, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });

const update = (id: number, product: IProduct) =>
  Api.patch<IProduct>(`product/${id}`, product);

const remove = (id: number) => Api.delete<IProduct>(`product/${id}`);

export const ProductService = {
  getAll,
  getOne,
  getImage,
  uploadImage,
  getByCategory,
  getTopProducts,
  getLastChanged,
  search,
  create,
  update,
  remove
};
