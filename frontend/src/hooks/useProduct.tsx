import { useCallback, useState } from "react"
import { IProduct } from "../interfaces/Product";
import { ProductService } from "../services/productService";

export const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>();
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);


  const getAll = useCallback(async () => {
    setLoading(true);
    const { status, data } = await ProductService.getAll()

    if (status !== 200) {
      setError(new Error)
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
      setError(new Error)
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
    product
  }
}