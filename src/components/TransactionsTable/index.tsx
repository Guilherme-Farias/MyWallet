import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Outcome</td>
            <td className="withdraw">- R$500,00</td>
            <td>algo</td>
            <td>17/03/2021</td>
          </tr>
          <tr>
            <td>Income</td>
            <td className="deposit"> R$1000,00</td>
            <td>algo</td>
            <td>17/03/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}