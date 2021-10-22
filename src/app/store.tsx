import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const rootReducer = combineReducers({

});

const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
export type Reducer = typeof rootReducer;
export type RootState = ReturnType<Reducer>
// Inferred type: {
// }
export type Store = typeof store;

export type AppDispatch = typeof store.dispatch;

export default store;
