import styled from 'styled-components';

export const HomeContainer = styled.div``;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  tr {
    background: ${(props) => props.theme['gray-700']};
    td {
      padding: 1rem;
      &:first-child {
        border-radius: 8px 0 0 8px;
        width: 50%;
      }
      &:last-child {
        border-radius: 0 8px 8px 0;
      }
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'outcome';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-500']
      : props.theme['red-500']};
`;
