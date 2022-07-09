import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react"
import { ICategory } from "../interfaces/Product";
import { CategoryService } from "../services/categoryService";

export const useCategory = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [error, setError] = useState<String[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getAllCategories = useCallback(async () => {
    setLoading(true);
    try {
      const { status, data } = await CategoryService.getAll()
      setCategories(data);

    } catch (error: AxiosError | any) {
      setError(error.response.data?.message)
    } finally {
      setLoading(false);
    }

  }, []);

  const createCategory = useCallback(async (category: ICategory) => {
    setLoading(true);
    try {
      const res = await CategoryService.create(category)
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

  return {
    categories,
    error,
    success,
    loading,
    getAllCategories,
    createCategory
  }
}