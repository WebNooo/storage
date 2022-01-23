import { RouteObject } from "react-router-dom";

export interface ProtectedRouteObject extends RouteObject {
  user?: boolean;
  permission?: string;
  children?: ProtectedRouteObject[] | undefined;
}
