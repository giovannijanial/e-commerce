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
  logoutCart: () => void,
  addProduct: (user: IUser, product: IProduct, quantity: number) => void,
  removeProduct: (idCartProduct: number) => void,
  reduceProduct: (idCartProduct: number) => void,
  increaseProduct: (idCartProduct: number) => void,
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
  logoutCart: () => { },
  addProduct: () => { },
  removeProduct: () => { },
  reduceProduct: () => { },
  increaseProduct: () => { }
}

const CartContext = createContext<ICartContext>(initialState);

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState(initialState.cart);

  const verifyCartProduct = (product: IProduct) => {
    const productIndex = cart.cartProducts.findIndex((cartItem) => cartItem.product.id === product.id);
    return productIndex;
  }

  const findIndexCartProduct = (idCartProduct: number) => {
    const cartProductIndex = cart.cartProducts.findIndex((cartProduct) => cartProduct.id === idCartProduct);
    return cartProductIndex;
  }

  const setActiveCart = async (idCartActive: string) => {
    const cartActive = await findCartActive(idCartActive);
    setCart(cartActive);
  }

  const logoutCart = async () => {
    setCart(initialState.cart);
  }

  const addProduct = async (user: IUser, product: IProduct, quantity: number) => {

    const productIndex = verifyCartProduct(product);
    if (productIndex < 0) {
      const updatedCart = {
        ...cart,
        total: cart.total + product.price,
        quantityProducts: cart.quantityProducts + quantity,
        cartProducts: [...cart.cartProducts, { price: product.price, quantity, product }]
      }
      setCart(updatedCart)
    }
    else {
      const newCartProducts = cart.cartProducts;
      newCartProducts[productIndex].quantity = cart.cartProducts[productIndex].quantity + 1;
      setCart({ ...cart, cartProducts: newCartProducts })
    }
  }

  const removeProduct = (idCartProduct: number) => {
    const newCartProducts = cart.cartProducts.filter((cartProduct) => cartProduct.id !== idCartProduct);
    setCart({
      ...cart,
      quantityProducts: cart.quantityProducts - 1,
      cartProducts: newCartProducts,
    });
  }

  const increaseProduct = (idCartProduct: number) => {
    const newCartProducts = cart.cartProducts;
    let newTotal = cart.total;
    const cartProductIndex = findIndexCartProduct(idCartProduct);
    newCartProducts[cartProductIndex].quantity = cart.cartProducts[cartProductIndex].quantity + 1
    newTotal += newCartProducts[cartProductIndex].price;

    setCart({ ...cart, cartProducts: newCartProducts, total: newTotal });
  }

  const reduceProduct = (idCartProduct: number) => {
    const newCartProducts = cart.cartProducts;
    let newTotal = cart.total;
    const cartProductIndex = findIndexCartProduct(idCartProduct);
    newCartProducts[cartProductIndex].quantity = cart.cartProducts[cartProductIndex].quantity - 1
    newTotal -= newCartProducts[cartProductIndex].price;

    setCart({ ...cart, cartProducts: newCartProducts, total: newTotal });
  }

  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct, setActiveCart, logoutCart, increaseProduct, reduceProduct }}>
      {children}
    </CartContext.Provider >
  )
}

export default CartContext 