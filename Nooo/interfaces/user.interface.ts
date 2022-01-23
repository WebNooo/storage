import { RoleInterface } from "./role.interface";

export interface UserInterface {
  _id: string;
  password: string;
  email: string;
  role?: RoleInterface;
}
