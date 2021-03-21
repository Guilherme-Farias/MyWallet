import { Container } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from "../../TransactionContext";
import { useContext } from "react";
import { formatValue } from "../../utils/formatValue";

export function Summary() {
  const { transactions } = useContext(TransactionContext)

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
      acc.deposits += transaction.amount
    } else {
      acc.withdraws += transaction.amount
    }
    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
  });
  const total = summary.deposits - summary.withdraws;
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>{formatValue(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <strong>- {formatValue(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatValue(total)}</strong>
      </div>
    </Container>
  )
}