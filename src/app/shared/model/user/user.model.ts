export interface IUser extends Array<User> { }

export interface User {
  id: number;
  email: string;
  senha: string;
  nome: string;
  sobrenome: string;
}

export interface UserAPI {
  payload: IUser;
}

