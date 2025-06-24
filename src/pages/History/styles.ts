import styled from "styled-components";

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.125rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${(props) => props.theme["gray-100"]};
  }
`;

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme["gray-600"]};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme["gray-100"]};
      font-size: 0.875rem;
      line-height: 1.6rem;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }
      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme["gray-700"]};
      padding: 1rem;
      line-height: 1.6rem;
      border-top: 4px solid ${(props) => props.theme["gray-800"]};
      font-size: 0.875rem;

      &:first-child {
        width: 50%;
      }
    }
  }
`;

const status_colors = {
  yellow: "yellow-500",
  green: "green-500",
  red: "red-500",
};

interface StatusProps {
  statusColor: keyof typeof status_colors;
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &&::before {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.theme[status_colors[props.statusColor]]};
  }
`;
