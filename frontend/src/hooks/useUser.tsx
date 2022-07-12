import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react"
import { IUser } from "../interfaces/User";
import { UserService } from "../services/userService"

export const useUser = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [user, setUser] = useState<IUser>()
  const [error, setError] = useState<String[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getAll = useCallback(async () => {
    setLoading(true);
    try {
      const { status, data } = await UserService.getAll()
      setUsers(data);

    } catch (error: AxiosError | any) {
      setError(error.response.data?.message)
    } finally {
      setLoading(false);
    }

  }, []);

  const getOne = useCallback(async (id: number) => {
    setLoading(true);
    try {
      const { status, data } = await UserService.getOne(id)
      setUser(data);

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  const create = useCallback(async (user: IUser) => {
    setLoading(true);
    try {
      const res = await UserService.create(user)
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

  const update = useCallback(async (id: number, user: IUser) => {
    setLoading(true);
    try {
      const res = await UserService.update(id, user)
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
      const { status, data } = await UserService.remove(id)

    } catch (error) {
      setError(["error"])
    } finally {
      setLoading(false);
    }
  }, [])

  return {
    users,
    error,
    success,
    loading,
    getAll,
    getOne,
    create,
    update,
    remove,
    setUser
  }
}