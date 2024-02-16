import { PayloadAction } from "@reduxjs/toolkit";
import { ModalState } from "./modal.initial";

export const reducer = {
  ACTIVE_MODAL: (state: ModalState, action: PayloadAction<ModalState>) => {
    state.isActive = action.payload.isActive;
  },
};
