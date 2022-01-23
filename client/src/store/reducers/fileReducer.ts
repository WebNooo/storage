import { createSlice } from "@reduxjs/toolkit";

const fileReducer = createSlice({
  name: "files",
  initialState: {
    dropZoneActive: false,
    files: [
      {
        _id: "12312",
        parent: 111,
        name: "test",
        size: 351646163453,
        type: "txt",
      },
      {
        _id: "123121",
        parent: 111,
        name: "test",
        size: 351646163453,
        type: "txt",
      },
    ],
  },
  reducers: {
    dropZoneState: (state, action) => {
      state.dropZoneActive = action.payload;
    },
    setFiles: (state, action) => {
      state.files = action.payload;
    },
  },
});

export const file = fileReducer.actions;

export default fileReducer.reducer;
