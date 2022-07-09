import { ICategory } from '../interfaces/Product';
import { Api } from '../providers';

const getAll = () => Api.get<ICategory[]>('/product/categories');
const create = (category: ICategory) =>
  Api.post('/product/categories', category, {
    headers: { 'Content-type': 'Application/json' }
  });

export const CategoryService = {
  getAll,
  create
};
