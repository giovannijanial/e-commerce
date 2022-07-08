export interface ICategory {
  id: number;
  name: string;
}

export interface IProduct {
  id?: number;
  name: string;
  price: number;
  quantity: number;
  createdAt?: Date;
  updatedAt?: Date;
  categories: ICategory[];
}
