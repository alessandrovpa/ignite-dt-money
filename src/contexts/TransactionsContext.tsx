import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface Transaction {
  id: number;
  description: string;
  type: 'income' | 'outcome';
  value: number;
  category: string;
  createdAt: string;
}

interface NewTransactionProps {
  description: string;
  value: number;
  category: string;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createNewTransaction: (data: NewTransactionProps) => Promise<void>;
}

interface TransactionContextProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transaction', {
      params: {
        q: query,
      },
    });

    setTransactions(response.data);
  }

  async function createNewTransaction({
    description,
    value,
    category,
    type,
  }: NewTransactionProps) {
    const response = await api.post('/transaction', {
      description,
      value,
      category,
      type,
      createdAt: new Date().toISOString(),
    });

    setTransactions((state) => [...state, response.data]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
