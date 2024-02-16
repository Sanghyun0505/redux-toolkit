import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./operation.initial";
import { reducer } from "./operation.reducer";

// createSlice 함수를 사용하면 action creator 함수와 action types를 자동으로 생성하여 리듀서 이름으로 만들어준다.
const operationSlice = createSlice({
  name: "operationSlice",
  initialState: initialState,
  // reducers 객체 내의 각 키가 자동으로 액션 생성자 함수가 되며, 해당 액션 생성자 함수를 호출하면 액션 객체가 생성됩니다.
  // 따라서 명시적으로 액션 생성자 함수를 정의하지 않아도 된다.
  reducers: reducer,
});

export const { reducer: operationReducer, actions } = operationSlice;
export const { PLUS, MINUS, DIVIDE, MULTIPLY } = actions;
