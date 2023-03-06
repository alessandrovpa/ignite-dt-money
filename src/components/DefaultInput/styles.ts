import styled from 'styled-components';

export const InputContainer = styled.input`
  flex: 1;
  border: 0;
  border-radius: 4px;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 0.75rem 1.25rem;
`;
