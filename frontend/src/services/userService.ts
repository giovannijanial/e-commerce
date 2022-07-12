import { IUser } from '../interfaces/User';
import { Api } from '../providers';

const getAll = () => Api.get<IUser[]>('/user');
const getOne = (id: number) => Api.get<IUser>(`user/${id}`);
const create = (user: IUser) =>
  Api.post('/user', user, { headers: { 'Content-type': 'Application/json' } });
const update = (id: number, user: IUser) =>
  Api.patch<IUser>(`user/${id}`, user);
const remove = (id: number) => Api.delete<IUser>(`user/${id}`);

export const UserService = {
  getAll,
  getOne,
  create,
  update,
  remove
};
