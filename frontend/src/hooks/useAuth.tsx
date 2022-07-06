import { AxiosError } from "axios";
import { useCallback, useContext, useState } from "react";
import AuthContext from "../contexts/authProvider";
import { ILogin } from "../interfaces/Auth";
import { AuthService } from "../services/authService";



export const useAuth = () => {
  const [login, setLogin] = useState<ILogin>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const { addAuth } = useContext(AuthContext);

  const authLogin = useCallback(async (login: ILogin) => {
    setLoading(true);
    try {
      const res = await AuthService.authLogin(login)
      const accessToken = await res?.data?.token;
      addAuth(login, accessToken)
      setSuccess(true);

    } catch (error: AxiosError | any) {

      if (!error?.response) {
        setError("Sem resposta do servidor!")
      }
      if (error.response.status === 401) {
        setError(error.response.data?.message)
      }
    } finally {
      setLoading(false)
    }

  }, []);

  return {
    authLogin,
    error,
    loading,
    success,
  }
}