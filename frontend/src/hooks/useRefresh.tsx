import { useContext } from "react";
import AuthContext from "../contexts/authProvider";
import { RefreshService } from "../services/refreshService";
import { useAuth } from "./useAuth"

export const useRefresh = () => {
  const { authLogin } = useAuth();
  const { auth } = useContext(AuthContext);

  const refresh = async () => {
    const res = await RefreshService.refreshToken(auth?.token);
    const newToken = res?.data?.token;
    return newToken;
  }

  return refresh

}