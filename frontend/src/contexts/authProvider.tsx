import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export interface ILogin {
  username: string,
  password: string,
}
export interface IAuth {
  login: ILogin,
  token: string,
}
export interface IAuthContext {
  auth: IAuth
  addAuth: (login: ILogin, token: string) => void
}

const initialState = {
  auth: { login: { username: "", password: "" }, token: "" },
  addAuth: () => { }
}

const AuthContext = createContext<IAuthContext>(initialState);

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState(initialState.auth);

  const addAuth = (login: ILogin, token: string) => {
    setAuth({ login, token })
  }
  return (
    <AuthContext.Provider value={{ auth, addAuth }}>
      {children}
    </AuthContext.Provider >
  )
}

export default AuthContext 