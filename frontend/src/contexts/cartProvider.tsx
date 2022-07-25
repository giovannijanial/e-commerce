import { createContext, ReactNode, useState } from "react";
import { CartStatus } from "../enums/CartStatus";
import { ICart } from "../interfaces/Cart";
import { IProduct } from "../interfaces/Product";
import { CartService } from "../services/cartService";

interface Props {
  children: ReactNode;
}
export interface ICartContext {
  cart: ICart,
  setActiveCart: (idCartActive: string) => void,
  logoutCart: () => void,
  addProduct: (product: IProduct, quantity: number) => void,
  removeProduct: (idCartProduct: number) => void,
  reduceProduct: (idCartProduct: number) => void,
  increaseProduct: (idCartProduct: number) => void,
  updateCart: (cartStatus: CartStatus) => void,
}

const findCartActive = async (cartId: string): Promise<ICart> => {
  const { data } = await CartService.getOne(cartId)
  return data;
}

const cartInitialState: ICart = {
  quantityProducts: 0,
  total: 0,
  cartStatus: CartStatus.FINISHED,
  cartProducts: []
}

const initialState = {
  cart: cartInitialState,
  setActiveCart: () => { },
  logoutCart: () => { },
  addProduct: () => { },
  removeProduct: () => { },
  reduceProduct: () => { },
  increaseProduct: () => { },
  updateCart: () => { },
}

const CartContext = createContext<ICartContext>(initialState);

export const CartProvider = ({ children }: Props) => {
  const [cart, setCart] = useState(initialState.cart);

  const verifyCartProduct = (product: IProduct) => {
    const productIndex = cart.cartProducts.findIndex((cartItem) => cartItem.product.id === product.id);
    return productIndex;
  }

  const findIndexProduct = (productId: number) => {
    const productIndex = cart.cartProducts.findIndex((cartProduct) => cartProduct.product.id === productId);
    return productIndex;
  }

  const setActiveCart = async (idCartActive: string) => {
    const cartActive = await findCartActive(idCartActive);
    setCart(cartActive);
  }

  const logoutCart = async () => {
    setCart(initialState.cart);
  }

  const addProduct = async (product: IProduct, quantity: number) => {

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

  const increaseProduct = (productId: number) => {
    const newCartProducts = cart.cartProducts;
    let newTotal = cart.total;
    const productIndex = findIndexProduct(productId);
    newCartProducts[productIndex].quantity = cart.cartProducts[productIndex].quantity + 1
    newTotal += newCartProducts[productIndex].price;

    setCart({ ...cart, cartProducts: newCartProducts, total: newTotal });
  }

  const reduceProduct = (productId: number) => {
    const newCartProducts = cart.cartProducts;
    let newTotal = cart.total;
    const productIndex = findIndexProduct(productId);
    newCartProducts[productIndex].quantity = cart.cartProducts[productIndex].quantity - 1
    newTotal -= newCartProducts[productIndex].price;

    setCart({ ...cart, cartProducts: newCartProducts, total: newTotal });
  }

  const updateCart = (cartStatus: CartStatus) => {
    setCart({ ...cart, cartStatus })
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addProduct,
        removeProduct,
        setActiveCart,
        logoutCart,
        increaseProduct,
        reduceProduct,
        updateCart
      }}>
      {children}
    </CartContext.Provider >
  )
}

export default CartContext 