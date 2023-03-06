import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0 0.5rem;
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  border-radius: 4px;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 0.75rem 1.25rem;
`;
