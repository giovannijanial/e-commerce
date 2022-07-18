import { AxiosError } from "axios";
import { Buffer } from "buffer";
import { useCallback, useState } from "react"
import { IProduct } from "../interfaces/Product";
import { ProductService } from "../services/productService";

export const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [product, setProduct] = useState<IProduct>();
  const [image, setImage] = useState("");
  const [error, setError] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);


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
      const { status, data } = await ProductService.getOne(id);
      setProduct(data);

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  const getByCategory = useCallback(async (category: string) => {
    setLoading(true);
    try {
      const { status, data } = await ProductService.getByCategory(category)
      if (data.products)
        setProducts(data.products);

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  const getImage = useCallback(async (image: string) => {
    setLoading(true);
    try {
      const { data } = await ProductService.getImage(image);
      setImage(Buffer.from(data, 'binary').toString('base64'));

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  const search = useCallback(async (query: string) => {
    setLoading(true);
    try {
      const { status, data } = await ProductService.search(query)
      setProducts(data);

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

  const update = useCallback(async (id: number, product: IProduct) => {
    setLoading(true);
    try {
      const res = await ProductService.update(id, product)
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
    getByCategory,
    getImage,
    image,
    search,
    product,
    create,
    update,
    remove,
    success,
    setProduct
  }
}