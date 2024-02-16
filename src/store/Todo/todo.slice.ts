import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./todo.initial";
import { reducer } from "./todo.reducer";

export const todoSlice = createSlice({
  name: "todoSlice",
  initialState: initialState,
  reducers: reducer,
});

export const { reducer: todoReducer, actions: todoActions } = todoSlice;
