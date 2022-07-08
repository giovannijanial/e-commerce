import { AxiosError } from "axios";
import { useCallback, useState } from "react"
import { IProduct } from "../interfaces/Product";
import { ProductService } from "../services/productService";

export const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>();
  const [error, setError] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);


  const getAll = useCallback(async () => {
    setLoading(true);
    const { status, data } = await ProductService.getAll()

    if (status !== 200) {
      setError(["error"])
    };

    setProducts(data);
    setLoading(false);
  }, []);

  const getOne = useCallback(async (id: number) => {
    setLoading(true);
    try {
      const { status, data } = await ProductService.getOne(id)
      setProduct(data);

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  const create = useCallback(async (product: IProduct) => {
    setLoading(true);
    try {
      const res = await ProductService.create(product)
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

  const remove = useCallback(async (id: number) => {
    setLoading(true);
    try {
      const { status, data } = await ProductService.remove(id)

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  return {
    products,
    error,
    loading,
    getAll,
    getOne,
    product,
    create,
    remove,
    success
  }
}