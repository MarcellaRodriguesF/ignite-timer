import { HistoryContainer, HistoryList, Status } from "./styles";

export function History() {
  return (
    <>
      <HistoryContainer>
        <h1>Meu histórico</h1>
        <HistoryList>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Início</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Conserto de débitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 1 hora</td>
                <td>
                  <Status statusColor={"yellow"}>Em andamento</Status>
                </td>
              </tr>
              <tr>
                <td>Conserto de débitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 1 hora</td>
                <td>
                  <Status statusColor={"yellow"}>Em andamento</Status>
                </td>
              </tr>{" "}
              <tr>
                <td>Conserto de débitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 1 hora</td>
                <td>
                  <Status statusColor={"red"}>Interrompido</Status>
                </td>
              </tr>{" "}
              <tr>
                <td>Conserto de débitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 1 hora</td>
                <td>
                  <Status statusColor={"yellow"}>Em andamento</Status>
                </td>
              </tr>{" "}
              <tr>
                <td>Conserto de débitos técnicos</td>
                <td>25 minutos</td>
                <td>Há cerca de 1 hora</td>
                <td>
                  <Status statusColor={"green"}>Concluida</Status>
                </td>
              </tr>
            </tbody>
          </table>
        </HistoryList>
      </HistoryContainer>
    </>
  );
}
