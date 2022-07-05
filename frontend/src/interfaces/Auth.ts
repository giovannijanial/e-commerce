export interface ILogin {
  username: string;
  password: string;
}
export interface IAuth {
  login: ILogin;
  token: string;
}
