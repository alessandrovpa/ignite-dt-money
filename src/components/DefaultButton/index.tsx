import { ReactNode, ButtonHTMLAttributes } from 'react';
import { DefaultButtonContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function DefaultButton({ children, ...props }: ButtonProps) {
  return <DefaultButtonContainer {...props}>{children}</DefaultButtonContainer>;
}
