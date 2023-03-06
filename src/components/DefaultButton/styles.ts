import styled from 'styled-components';

export const DefaultButtonContainer = styled.button`
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['green-300']};
  padding: 0.75rem 1.25rem;
  border: 0;
  border-radius: 4px;
  font-weight: 700;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-500']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;
