import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { operationReducer } from "./Operation";
import { todoReducer } from "./Todo";
import { modalReducer } from "./Modal";

const rootReducer = combineReducers({
  operation: operationReducer,
  todo: todoReducer,
  modal: modalReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
