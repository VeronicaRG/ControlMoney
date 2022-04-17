import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Expense} from '../@types/expense';

interface ExpenseProvidersProps {
  children: ReactNode;
}

type ExpenseContextProps = {
  selectedExpense?: string;
  setSelectedExpense: React.Dispatch<React.SetStateAction<string>>;
  expenses: Expense[];
  setExpenses: React.Dispatch<React.SetStateAction<Expense[]>>;
};

export const ExpenseContext = createContext<ExpenseContextProps>({
  setSelectedExpense: () => {},
  setExpenses: () => {},
  expenses: [],
});

function ExpenseProvider({children}: ExpenseProvidersProps) {
  const [selectedExpense, setSelectedExpense] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);

  return (
    <ExpenseContext.Provider
      value={{
        selectedExpense,
        setSelectedExpense,
        expenses,
        setExpenses: setExpenses,
      }}>
      {children}
    </ExpenseContext.Provider>
  );
}

function useExpenseContext() {
  const context = useContext(ExpenseContext);
  return context;
}

export {ExpenseProvider, useExpenseContext};
