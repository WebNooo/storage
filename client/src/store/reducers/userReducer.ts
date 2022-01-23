import { UserInterface } from "nooo";
import { createSlice } from "@reduxjs/toolkit";

interface IUserSlice {
  isAuth: boolean;
  user: UserInterface;
}

const initialState: IUserSlice = {
  isAuth: false,
  user: {
    _id: "",
    email: "",
    password: "",
    role: {
      _id: "",
      title: "",
      permissions: [],
    },
  },
};

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setAuth: (state, action) => {
      state.isAuth = action.payload;
    },
  },
});

export const user = userReducer.actions;

export default userReducer.reducer;
