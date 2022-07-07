import { useCallback, useState } from "react"
import { ICart } from "../interfaces/Cart";
import { CartService } from "../services/cartService";

export const useCart = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [cart, setCart] = useState<ICart>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);


  const getAll = useCallback(async () => {
    setLoading(true);
    const { status, data } = await CartService.getAll()

    if (status !== 200) {
      setError(new Error)
    };

    setCarts(data);
    setLoading(false);
  }, []);

  const getOne = useCallback(async (id: string) => {
    setLoading(true);
    try {
      const { status, data } = await CartService.getOne(id)
      setCart(data);

    } catch (error) {
      setError(new Error)
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
    getOne
  }
}