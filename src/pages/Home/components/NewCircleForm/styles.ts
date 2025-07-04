import { styled } from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`;

const BaseInput = styled.input`
  background-color: transparent;
  font-size: 1.125rem;
  font-weight: bold;
  border: 0;
  height: 2.5rem;
  border-bottom: ${(props) => props.theme["gray-500"]} 2px solid;
  padding: 0.5rem;
  color: ${(props) => props.theme["gray-100"]};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme["green-500"]};
  }

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinutesAmountInput = styled(BaseInput)`
  width: 3.5rem;
`;