import styled from 'styled-components';

export const SummaryContainer = styled.div`
  margin-top: -5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

export const Card = styled.div`
  background: ${(props) => props.theme['gray-600']};
  padding: 2rem;
  border-radius: 4px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;

    color: ${(props) => props.theme['gray-300']};
  }

  h2 {
    font-size: 2rem;
    margin-top: 1rem;
  }

  &:last-child {
    background: ${(props) => props.theme['green-700']};
  }
`;
