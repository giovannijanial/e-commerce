import { AxiosError } from "axios";
import { useCallback, useState } from "react"
import { ICart } from "../interfaces/Cart";
import { CartService } from "../services/cartService";

export const useCart = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [cart, setCart] = useState<ICart>();
  const [error, setError] = useState<String[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


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

  const create = useCallback(async (cart: ICart) => {
    setLoading(true);
    try {
      const res = await CartService.create(cart)
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
    setCart
  }
}