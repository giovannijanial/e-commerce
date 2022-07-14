export interface ICategory {
  id: number;
  name: string;
  products?: IProduct[];
}

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  cartItems: Object;
  createdAt?: Date;
  updateAt?: Date;
  categories: ICategory[];
}
