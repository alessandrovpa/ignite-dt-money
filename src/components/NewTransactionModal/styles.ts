import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  inset: 0;
`;

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${(props) => props.theme['gray-800']};
  padding: 2rem;
  border-radius: 8px;

  form {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    min-width: 26rem;
  }
`;

export const CloseButton = styled(Dialog.Close)`
  background: transparent;
  border: 0;
  position: fixed;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  color: ${(props) => props.theme['gray-100']};
  line-height: 0;
`;

export const TransactionType = styled(RadioGroup.RadioGroup)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'outcome';
}

// eslint-disable-next-line prettier/prettier
export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  padding: 0.75rem 1.25rem;
  background: ${(props) => props.theme['gray-700']};
  border: 0;
  color: ${(props) => props.theme['gray-300']};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-300']
        : props.theme['red-300']};
  }

  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};
    svg {
      color: ${(props) => props.theme.white};
    }
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['gray-600']};
  }
`;

export const Input = styled.input`
  flex: 1;
  border: 0;
  border-radius: 4px;
  background: ${(props) => props.theme['gray-900']};
  color: ${(props) => props.theme['gray-300']};
  padding: 0.75rem 1.25rem;
`;
