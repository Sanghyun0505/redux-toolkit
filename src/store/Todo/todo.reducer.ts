import { PayloadAction } from "@reduxjs/toolkit";
import { TodoIdState, TodoState, TodoTextState } from "./todo.initial";

let id = 0;

export const reducer = {
  ADD_TODO: (state: TodoState, action: PayloadAction<TodoTextState>) => {
    state.todos = state?.todos.concat({
      id: id++,
      text: action.payload.text,
    });
  },
  DELETE_TODO: (state: TodoState, action: PayloadAction<TodoIdState>) => {
    state.todos = state?.todos.filter((item) => item.id !== action.payload.id);
  },
};
