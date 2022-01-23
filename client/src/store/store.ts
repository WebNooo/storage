import { Actions } from "./reducers/index";
import { HEADER_ACCESS_NAME } from "./../constants/common";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import fileReducer from "./reducers/fileReducer";
import formReducer from "./reducers/formReducer";
import { Instance } from "../api/instance";
import { HTTP_STATUSES } from "../constants";

const rootReducer = combineReducers({
  userReducer,
  fileReducer,
  formReducer,
});

export const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  Instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: any) => {
      if (error.response.status === HTTP_STATUSES.Forbidden) {
        //show message forbidden
        console.log("forbidden");
      }

      if (error.response.status === 401) {
        console.log("Unauthorized");

        localStorage.removeItem(HEADER_ACCESS_NAME);
        store.dispatch(Actions.user.setAuth(false));
        store.dispatch(Actions.user.setUser({}));
      }
    }
  );

  return store;
};

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType["dispatch"];
