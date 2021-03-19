import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";
import { formatValue } from "../../utils/formatValue";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useContext(TransactionContext);
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
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === "withdraw" && '- '}
                {formatValue(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{new Date(transaction.created_at).toLocaleDateString('pt-BR',)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}