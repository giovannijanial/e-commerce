import { ILogin } from '../interfaces/Auth';
import { IUser } from '../interfaces/User';
import { Api } from '../providers';

const authLogin = (login: ILogin) =>
  Api.post('auth/login', login, {
    headers: { 'Content-type': 'Application/json' }
  });

const getUserAuthenticated = (username: string) =>
  Api.get<IUser>(`auth/user/${username}`);

export const AuthService = {
  authLogin,
  getUserAuthenticated
};
