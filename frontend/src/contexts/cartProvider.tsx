import { createContext, ReactNode, useState } from "react";
import { useCart } from "../hooks/useCart";
import { IAuth, ILogin } from "../interfaces/Auth";
import { ICart, ICartItem } from "../interfaces/Cart";
import { IProduct } from "../interfaces/Product";
import { IUser } from "../interfaces/User";
import { AuthService } from "../services/authService";
import { ProductService } from "../services/productService";

interface Props {
  children: ReactNode;
}
export interface ICartContext {
  cart: ICart,
  setActiveCart: (cartId: string) => void,
  addProduct: (user: IUser, idProduct: number, quantity: number) => void,
  removeProduct: (idCart: string, idProduct: number) => void,
}

const findProduct = async (idProduct: number): Promise<IProduct> => {
  const { data } = await ProductService.getOne(idProduct)
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
  const { getOne, cart: activeCart } = useCart();

  const setActiveCart = async (cartId: string) => {
    console.log(cartId);
    await getOne(cartId);
    if (activeCart)
      setCart(activeCart);
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