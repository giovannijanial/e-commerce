import { IUser } from './User';

export interface ICarts {
  user: IUser;
  quantity: number;
  productId: number;
}
