import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { formatValue } from "../../utils/formatValue";
import { Container } from "./styles";

interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: 'withdraw' | 'deposit';
  category: string;
  created_at: Date;
}

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions').then(response => {
      setTransactions(response.data.transactions)
    })
  }, [])

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