import { styled } from "styled-components";

export const CountdownContainer = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 10rem;
  font-weight: bold;
  color: ${(props) => props.theme["gray-100"]};
  align-items: center;
  justify-content: center;

  span {
    font-family: " Roboto mono", monospace;
    display: flex;
    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  color: ${(props) => props.theme["green-300"]};
  padding: 0.5rem;
`;