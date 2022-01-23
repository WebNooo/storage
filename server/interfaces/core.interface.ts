import { IUser } from "./user.interface";
import { Request } from "express";

export interface IDebug {
  type?: "INFO" | "ERROR" | "SUCCESS";
  message?: any;
  group?: string;
}

export interface CustomRequest extends Request {
  user?: IUser | null;
}
