import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react';
import { SummaryContainer, Card } from './styles';
import { useTheme } from 'styled-components';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';
import { priceFormatter } from '../../utils/formatter';

export function Summary() {
  const theme = useTheme();
  const { transactions } = useContext(TransactionsContext);

  const summary = transactions.reduce(
    (accumulator, transaction) => {
      if (transaction.type === 'income') {
        accumulator.income += transaction.value;
        accumulator.total += transaction.value;
      } else {
        accumulator.outcome += transaction.value;
        accumulator.total -= transaction.value;
      }

      return accumulator;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <SummaryContainer>
      <Card>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp color={theme['green-300']} size={24} />
        </header>
        <h2>{priceFormatter.format(summary.income)}</h2>
      </Card>
      <Card>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown color={theme['red-300']} size={24} />
        </header>
        <h2>{priceFormatter.format(summary.outcome)}</h2>
      </Card>
      <Card>
        <header>
          <span>Total</span>
          <CurrencyDollar color={theme.white} size={24} />
        </header>
        <h2>{priceFormatter.format(summary.total)}</h2>
      </Card>
    </SummaryContainer>
  );
}
