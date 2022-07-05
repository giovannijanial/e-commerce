import { IUser } from '../interfaces/User';
import { Api } from '../providers';

const getAllUsers = () => Api.get<IUser[]>('/user');
const createUser = (user: IUser) =>
  Api.post('/user', user, { headers: { 'Content-type': 'Application/json' } });

export const UserService = {
  getAllUsers,
  createUser
};
