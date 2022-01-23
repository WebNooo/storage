import { UserInterface } from "./user.interface";

export interface FileInterface {
  _id: string;
  filename: string;
  type: string;
  path: string;
  size: number;
  user: UserInterface | string;
  parent: FileInterface | string;
}
