import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import fileReducer from './reducers/fileReducer'

const rootReducer = combineReducers({
  userReducer,
  fileReducer
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType['dispatch'];
