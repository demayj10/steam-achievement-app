import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from '../AppSlice';

export const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
export type Reducer = typeof rootReducer;
export type RootState = ReturnType<Reducer>
// Inferred type: {
//    AppState,
// }
export type Store = typeof store;

export type AppDispatch = typeof store.dispatch;

export default store;
