import { createContext, ReactNode, useContext, useState } from "react";
import { CartStatus } from "../enums/CartStatus";
import { IAuth, ILogin } from "../interfaces/Auth";
import { ICart } from "../interfaces/Cart";
import { IUser } from "../interfaces/User";
import { AuthService } from "../services/authService";
import CartContext from "./cartProvider";

interface Props {
  children: ReactNode;
}
export interface IAuthContext {
  auth: IAuth
  addAuth: (login: ILogin, token: string) => void
  logout: () => void
}

const findUserAuthenticated = async (username: string): Promise<IUser> => {
  const { data } = await AuthService.getUserAuthenticated(username);
  return data;
}

const findCartActive = (user: IUser) => {
  const cartActive = user.carts?.find((cart) => cart.cartStatus === CartStatus.WAITING_PAYMENT);
  if (cartActive)
    return cartActive;
  else
    return null;
}

const userInitialState: IUser = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
  age: 0,
  role: "",
}

const initialState = {
  auth: { user: userInitialState, token: "" },
  addAuth: () => { },
  logout: () => { }
}

const AuthContext = createContext<IAuthContext>(initialState);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(initialState.auth);

  const addAuth = async (login: ILogin, token: string) => {
    const user = await findUserAuthenticated(login.username)
    setAuth({ user, token })
  }

  const logout = () => {
    setAuth(initialState.auth)
  }

  return (
    <AuthContext.Provider value={{ auth, addAuth, logout }}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthContext 