import { PayloadAction } from "@reduxjs/toolkit";
import { OperationState } from "./operation.initial";

export const reducer = {
  PLUS: (state: OperationState, action: PayloadAction<OperationState>) => {
    state.number += action.payload.number;
  },
  MINUS: (state: OperationState, action: PayloadAction<OperationState>) => {
    state.number -= action.payload.number;
  },
  DIVIDE: (state: OperationState, action: PayloadAction<OperationState>) => {
    state.number /= action.payload.number;
  },
  MULTIPLY: (state: OperationState, action: PayloadAction<OperationState>) => {
    state.number *= action.payload.number;
  },
};
