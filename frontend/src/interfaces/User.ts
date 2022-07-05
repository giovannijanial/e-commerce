import { ICarts } from './Cart';

export interface IUser {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  age: number;
  role: string;
  carts?: Object;
}
