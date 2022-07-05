import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react"
import { IUser } from "../interfaces/User";
import { UserService } from "../services/userService"

export const useUser = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [error, setError] = useState<String[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const getAllUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { status, data } = await UserService.getAllUsers()
      setUsers(data);

    } catch (error: AxiosError | any) {
      setError(error.response.data?.message)
    } finally {
      setLoading(false);
    }

  }, []);

  const createUser = useCallback(async (user: IUser) => {
    setLoading(true);
    try {
      const res = await UserService.createUser(user)
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
    users,
    error,
    success,
    loading,
    getAllUsers,
    createUser
  }
}