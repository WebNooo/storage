import { createSlice } from '@reduxjs/toolkit'

const userReducer = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
})

export const user = userReducer.actions

export default userReducer.reducer
