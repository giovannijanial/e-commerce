import { createContext, ReactNode, useState } from "react";
import { ICart } from "../interfaces/Cart";
import { IProduct } from "../interfaces/Product";
import { IUser } from "../interfaces/User";
import { CartService } from "../services/cartService";

interface Props {
  children: ReactNode;
}
export interface ICartContext {
  cart: ICart,
  setActiveCart: (idCartActive: string) => void,
  addProduct: (user: IUser, product: IProduct, quantity: number) => void,
  removeProduct: (idCart: string, idProduct: number) => void,
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

  const verifyCartProduct = (product: IProduct) => {
    const productIndex = cart.cartProducts.findIndex((cartItem) => cartItem.product.id === product.id);
    return productIndex;
  }

  const setActiveCart = async (idCartActive: string) => {
    const cartActive = await findCartActive(idCartActive);
    setCart(cartActive);
  }

  const addProduct = async (user: IUser, product: IProduct, quantity: number) => {


    const productIndex = verifyCartProduct(product);
    if (productIndex < 0) {
      const updatedCart = {
        ...cart,
        quantityProducts: cart.quantityProducts + quantity,
        cartProducts: [...cart.cartProducts, { price: product.price, quantity, product }]
      }
      setCart(updatedCart)
    }
    else {
      const oldCartProducts = cart.cartProducts;
      oldCartProducts[productIndex].quantity = cart.cartProducts[productIndex].quantity + 1;
      setCart({ ...cart, cartProducts: oldCartProducts })
    }


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