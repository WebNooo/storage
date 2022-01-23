import { IUser } from "../../interfaces";

declare namespace Express {
  export interface Request {
    user?: IUser;
    headers: {
      token: string;
      "x-access-token": number;
      "x-refresh-token": string;
    };
  }
}
