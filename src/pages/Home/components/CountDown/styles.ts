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
    font-family: "Roboto mono", monospace;
    display: flex;
    background-color: ${(props) => props.theme["gray-700"]};
    color: ${(props) => props.theme["gray-100"]};
    padding: 1rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    font-size: 6rem;
    gap: 0.75rem;

    span {
      padding: 0.75rem;
    }
  }

  @media (max-width: 480px) {
    font-size: 4rem;
    gap: 0.5rem;

    span {
      padding: 0.5rem;
      border-radius: 6px;
    }
  }

  @media (max-width: 320px) {
    font-size: 3rem;
    gap: 0.25rem;

    span {
      padding: 0.25rem;
      border-radius: 4px;
    }
  }
`;

export const Separator = styled.div`
  color: ${(props) => props.theme["green-300"]};
  padding: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.375rem;
  }

  @media (max-width: 480px) {
    padding: 0.25rem;
  }

  @media (max-width: 320px) {
    padding: 0.125rem;
  }
`;
