import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";
import { modalActions } from "../../store/Modal";

const Modal = () => {
  const { isActive } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();
  const { ACTIVE_MODAL } = modalActions;

  return (
    <>
      <button onClick={() => dispatch(ACTIVE_MODAL({ isActive: true }))}>
        모달 활성화
      </button>

      {isActive && (
        <Container onClick={() => dispatch(ACTIVE_MODAL({ isActive: false }))}>
          <Box onClick={(e) => e.stopPropagation()}>
            <h2>Redux-Toolkit으로 Modal 구현하기!</h2>
          </Box>
        </Container>
      )}
    </>
  );
};

export default Modal;

const Container = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  width: 600px;
  height: 600px;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 3px 5px 5px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  padding: 20px;
`;
