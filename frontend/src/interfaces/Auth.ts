import { IUser } from './User';

export interface ILogin {
  username: string;
  password: string;
}
export interface IAuth {
  user: IUser;
  token: string;
}
