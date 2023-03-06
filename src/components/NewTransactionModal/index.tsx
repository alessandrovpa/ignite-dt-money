import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { DefaultButton } from '../DefaultButton';
import {
  CloseButton,
  Content,
  Input,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from './styles';
import * as z from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionSchema = z.object({
  description: z.string(),
  value: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
});

type NewTransactionInputs = z.infer<typeof newTransactionSchema>;

export function NewTransactionModal() {
  const { createNewTransaction } = useContext(TransactionsContext);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    control,
    reset,
  } = useForm<NewTransactionInputs>({
    resolver: zodResolver(newTransactionSchema),
  });

  async function handleCreateNewTransaction(data: NewTransactionInputs) {
    await createNewTransaction(data);
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <Input
            type="text"
            placeholder="Descrição"
            required
            {...register('description')}
          />
          <Input
            type="number"
            placeholder="Preço"
            required
            {...register('value', { valueAsNumber: true })}
          />
          <Input
            type="text"
            placeholder="Categoria"
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name="type"
            render={({ field }) => {
              return (
                <TransactionType
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButton
                    value="income"
                    type="button"
                    variant="income"
                  >
                    <ArrowCircleUp size={24} />
                    Entrada
                  </TransactionTypeButton>
                  <TransactionTypeButton
                    value="outcome"
                    type="button"
                    variant="outcome"
                  >
                    <ArrowCircleDown size={24} />
                    Saída
                  </TransactionTypeButton>
                </TransactionType>
              );
            }}
          />

          <DefaultButton type="submit" disabled={isSubmitting}>
            Cadastrar
          </DefaultButton>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
