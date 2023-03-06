import React, { InputHTMLAttributes } from 'react';
import {
  FieldValues,
  UseFormRegister,
  UseFormRegisterReturn,
} from 'react-hook-form';
import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn;
}

export function DefaultInput(props: InputProps) {
  return <InputContainer {...props} />;
}
