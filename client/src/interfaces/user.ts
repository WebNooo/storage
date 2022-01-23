export interface IUser {
  id?: string;
  permissions: string[];
}

export interface IApiLogin {
  username: string;
  password: string;
}
