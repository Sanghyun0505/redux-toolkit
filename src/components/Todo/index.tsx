import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useState } from "react";
import { todoActions } from "../../store/Todo";

const Todo = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const { ADD_TODO, DELETE_TODO } = todoActions;

  const [text, setText] = useState("");

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(ADD_TODO({ text }));
          setText("");
        }}
      >
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button type="submit">등록</button>
      </form>

      <ul>
        {todos.map((item) => (
          <li
            key={item.id}
            onClick={() => dispatch(DELETE_TODO({ id: item.id }))}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
