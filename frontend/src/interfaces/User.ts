import { ICart } from './Cart';

export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password?: string;
  age: number;
  role: string | null;
  carts?: ICart[];
  createdAt?: Date;
  updateAt?: Date;
}
