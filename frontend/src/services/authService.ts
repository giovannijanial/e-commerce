import { ILogin } from '../interfaces/Auth';
import { Api } from '../providers';

const authLogin = (login: ILogin) =>
  Api.post('auth/login', login, {
    headers: { 'Content-type': 'Application/json' }
  });

export const AuthService = {
  authLogin
};
