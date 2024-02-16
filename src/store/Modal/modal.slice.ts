import { createSlice } from "@reduxjs/toolkit";
import { iniitalState } from "./modal.initial";
import { reducer } from "./modal.reducer";

export const modalSlice = createSlice({
  name: "modalSlice",
  initialState: iniitalState,
  reducers: reducer,
});

export const { reducer: modalReducer, actions } = modalSlice;
export const { ACTIVE_MODAL } = actions;
