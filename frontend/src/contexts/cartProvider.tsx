import { createContext, ReactNode, useContext, useState } from "react";
import { useCart } from "../hooks/useCart";
import { IAuth, ILogin } from "../interfaces/Auth";
import { ICart, ICartItem } from "../interfaces/Cart";
import { IProduct } from "../interfaces/Product";
import { IUser } from "../interfaces/User";
import { AuthService } from "../services/authService";
import { CartService } from "../services/cartService";
import { ProductService } from "../services/productService";
import AuthContext from "./authProvider";

interface Props {
  children: ReactNode;
}
export interface ICartContext {
  cart: ICart,
  setActiveCart: (idCartActive: string) => void,
  addProduct: (user: IUser, idProduct: number, quantity: number) => void,
  removeProduct: (idCart: string, idProduct: number) => void,
}

const findProduct = async (idProduct: number): Promise<IProduct> => {
  const { data } = await ProductService.getOne(idProduct)
  return data;
}

const findCartActive = async (cartId: string): Promise<ICart> => {
  const { data } = await CartService.getOne(cartId)
  return data;
}

const cartInitialState: ICart = {
  quantityProducts: 0,
  total: 0,
  cartProducts: []
}

const initialState = {
  cart: cartInitialState,
  setActiveCart: () => { },
  addProduct: () => { },
  removeProduct: () => { }
}

const CartContext = createContext<ICartContext>(initialState);

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState(initialState.cart);

  const setActiveCart = async (idCartActive: string) => {
    const cartActive = await findCartActive(idCartActive);
    setCart(cartActive);
  }

  const addProduct = async (user: IUser, idProduct: number, quantity: number) => {
    const product = await findProduct(idProduct);
    const cartProducts: ICartItem[] = [{
      price: product.price,
      quantity,
      product
    }]
    const quantityProducts = quantity;
    const total = quantity * product.price;
    setCart({ user, cartProducts, quantityProducts, total })
  }

  const removeProduct = () => {

  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, setActiveCart }}>
      {children}
    </CartContext.Provider >
  )
}

export default CartContext 