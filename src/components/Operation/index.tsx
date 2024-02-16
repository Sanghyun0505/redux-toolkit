import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { PLUS, MINUS, DIVIDE, MULTIPLY } from "../../store/Operation";

const Operation = () => {
  const { number } = useSelector((state: RootState) => state.operation);
  const dispatch = useDispatch();

  return (
    <>
      <p>{number}</p>
      <button onClick={() => dispatch(PLUS({ number: 1 }))}>+1</button>
      <button onClick={() => dispatch(MINUS({ number: 1 }))}>-1</button>
      <button onClick={() => dispatch(DIVIDE({ number: 2 }))}>/2</button>
      <button onClick={() => dispatch(MULTIPLY({ number: 2 }))}>*2</button>
    </>
  );
};

export default Operation;
