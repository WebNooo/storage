import React, { useEffect } from "react";
import { Api } from "../../api";
import "../../assets/styles/app.scss";
import { HEADER_ACCESS_NAME } from "../../constants";
import { useAppDispatch, useProtectedRoutes } from "../../hooks";
import { ProtectedRouteObject } from "../../interfaces";
import { Actions } from "../../store/reducers";
import { UserLayout, GuestLayout } from "../layouts";
import {
  MainPage,
  LoginPage,
  FilesPage,
  ProfilePage,
  ForgotPage,
  RegistrationPage,
} from "./pages";

export const App: React.FC = () => {
  const dispatch = useAppDispatch();

  console.log("app rerender");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = localStorage.getItem(HEADER_ACCESS_NAME);
        if (accessToken) {
          const { data = {}, status } = await Api.user.profile();

          if (status === 200) {
            dispatch(Actions.user.setAuth(true));
            dispatch(Actions.user.setUser(data));
          }
        }
      } catch (e) {}
    };

    checkAuth();
  }, []);

  let appRoutes: ProtectedRouteObject[] = [
    {
      path: "/",
      element: <UserLayout />,
      user: true,
      children: [
        { index: true, element: <MainPage /> },
        { path: "/profile", element: <ProfilePage /> },
        { path: "/files", element: <FilesPage /> },
      ],
    },
    {
      path: "/",
      element: <GuestLayout />,
      user: false,
      children: [
        { index: true, path: "/login", element: <LoginPage /> },
        { path: "/forgot", element: <ForgotPage /> },
        { path: "/registration", element: <RegistrationPage /> },
      ],
    },
  ];

  const routes = useProtectedRoutes(appRoutes);

  return <>{routes}</>;
};
