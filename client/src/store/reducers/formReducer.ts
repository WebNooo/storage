import { createSlice } from "@reduxjs/toolkit";

interface IFormField {
  [key: string]: { value: string; error: string };
}

interface IFormSlice {
  forms: {
    [key: string]: IFormField;
  };
}

const initialState: IFormSlice = {
  forms: {},
};

const formReducer = createSlice({
  name: "form",
  initialState,
  reducers: {
    init: (state, { payload: { name, fields } }) => {
      state.forms[name] = fields.reduce(
        (res: any, field: string) => ({
          ...res,
          [field]: { value: "", error: "" },
        }),
        {}
      );
    },
    setValue: (state, { payload: { name, field, value } }) => {
      state.forms[name][field].value = value;
    },
    setError: (state, { payload: { form, field, error } }) => {
      state.forms[form][field].error = error;
    },
  },
});

export const form = formReducer.actions;

export default formReducer.reducer;
