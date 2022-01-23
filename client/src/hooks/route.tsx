import { useRoutes, RouteObject, Navigate } from "react-router-dom";
import { useAppSelector } from ".";
import { ProtectedRouteObject } from "../interfaces";

export const useProtectedRoutes = (routes: ProtectedRouteObject[]) => {
  const { isAuth, user } = useAppSelector((state) => state.userReducer);

  const parseRoutes = (routes: ProtectedRouteObject[]) => {
    return routes.map((route) => {
      if (route?.user === true && isAuth === false) {
        route.element = (
          <>
            <Navigate to="/login" />
          </>
        );
      } else if (route?.user === false && isAuth === true) {
        route.element = (
          <>
            <Navigate to="/" />
          </>
        );
      } else {
        if (
          route?.permission &&
          isAuth === true &&
          !user?.role?.permissions?.includes(route?.permission || "")
        ) {
          route.element = <>У вас нет доступа к данной странице</>;
        } else {
          if (route?.children && route?.children?.length > 0) {
            route.children = parseRoutes(route.children);
          }
        }
      }
      return route;
    });
  };

  const element = useRoutes(parseRoutes(routes));

  return element;
};
