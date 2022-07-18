import { AxiosError } from "axios";
import { useCallback, useContext, useState } from "react"
import CartContext from "../contexts/cartProvider";
import { ICart } from "../interfaces/Cart";
import { IProduct } from "../interfaces/Product";
import { IUser } from "../interfaces/User";
import { CartService } from "../services/cartService";

export const useCart = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [cart, setCart] = useState<ICart>();
  const [error, setError] = useState<String[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { addProduct, setActiveCart } = useContext(CartContext);


  const getAll = useCallback(async () => {
    setLoading(true);
    try {
      const { status, data } = await CartService.getAll()
      setCarts(data);

    } catch (error: AxiosError | any) {
      setError(error.response.data?.message)
    } finally {
      setLoading(false);
    }
  }, []);

  const getOne = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const { status, data } = await CartService.getOne(id)
      setCart(data);

    } catch (error: AxiosError | any) {
      setError(error.response.data?.message)
    } finally {
      setLoading(false);
    }
  }, [])

  const create = useCallback(async (user: IUser, product: IProduct, quantity: number) => {
    setLoading(true);
    try {
      const body = {
        user,
        productId: product.id,
        quantity
      }
      const res = await CartService.create(body)
      if (res.data.id) {
        setActiveCart(res.data.id);
        addProduct(user, product, 1);
        setSuccess(true);
      }
    } catch (error: AxiosError | any) {
      if (!error?.response) {
        setError(["Sem resposta do servidor!"])
      }
      if (error.response.status === 400) {
        setError(error.response.data?.message)
      }
    } finally {
      setLoading(false)
    }
  }, []);

  const update = useCallback(async (id: string, cart: ICart) => {
    setLoading(true);
    try {
      const res = await CartService.update(id, cart)
      setSuccess(true);
    } catch (error: AxiosError | any) {
      if (!error?.response) {
        setError(["Sem resposta do servidor!"])
      }
      if (error.response.status === 400) {
        setError(error.response.data?.message)
      }
    } finally {
      setLoading(false)
    }
  }, []);

  const remove = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const { status, data } = await CartService.remove(id)

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  const removeProduct = useCallback(async (id: string, idProduct: number) => {
    setLoading(true);
    try {
      const { status, data } = await CartService.removeProduct(id, idProduct)

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  return {
    carts,
    cart,
    error,
    loading,
    getAll,
    getOne,
    create,
    update,
    remove,
    setCart,
    removeProduct
  }
}