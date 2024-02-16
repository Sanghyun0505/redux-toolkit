export type TodoTextState = {
  text: string;
};

export type TodoIdState = {
  id: number;
};

export type TodoState = {
  todos: (TodoIdState & TodoTextState)[];
};

export const initialState: TodoState = {
  todos: [],
};
