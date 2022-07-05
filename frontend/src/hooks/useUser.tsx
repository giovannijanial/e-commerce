import axios, { AxiosError } from "axios";
import { useCallback, useState } from "react"
import { IUser } from "../interfaces/User";
import { UserService } from "../services/userService"

export const useUser = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [errorMessage, setErrorMessage] = useState<AxiosError>();
  const [loading, setLoading] = useState<boolean>(false);

  const getAllUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { status, data } = await UserService.getAllUsers()
      setUsers(data);

    } catch (error: AxiosError | any) {
      setErrorMessage(error)
    } finally {
      setLoading(false);
    }

  }, []);

  const createUser = useCallback(async (user: IUser) => {
    setLoading(true);
    try {
      const res = await UserService.createUser(user)

    } catch (error: AxiosError | any) {
      if (axios.isAxiosError(error)) {
        setErrorMessage(error)

      }
    } finally {
      setLoading(false)
    }


  }, []);

  return {
    users,
    errorMessage,
    loading,
    getAllUsers,
    createUser
  }
}