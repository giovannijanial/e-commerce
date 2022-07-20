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
  rating: number;
  image?: string;
  cartItems: Object;
  createdAt?: Date;
  updateAt?: Date;
  categories: ICategory[];
}

export interface IMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}
export interface IProductPage {
  items: IProduct[];
  meta: IMeta;
}
