import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.75rem;
    font-size: 1.5rem;
  }
`;



export const Basecountdownbutton = styled.button`
  width: 100%;
  padding: 1rem;
  border: 0;
  border-radius: 8px;
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme["gray-100"]};
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const StartCountdownButton = styled(Basecountdownbutton)`
  background-color: ${(props) => props.theme["green-300"]};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["green-700"]};
  }
`;

export const StopCountdownButton = styled(Basecountdownbutton)`
 background-color: ${(props) => props.theme["red-500"]};
  &:not(:disabled):hover {
    background-color: ${(props) => props.theme["red-700"]};
  }`;
