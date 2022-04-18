import React, {createContext, ReactNode, useContext, useState} from 'react';
import {Expense} from '../@types/expense';

interface ExpenseProvidersProps {
  children: ReactNode;
}

type ExpenseContextProps = {
  selectedExpense?: string;
  setSelectedExpense: React.Dispatch<React.SetStateAction<string>>;
  expenses: Expense[];
  setExpenses: (data?: Expense[]) => void;
};

export const ExpenseContext = createContext<ExpenseContextProps>({
  setSelectedExpense: () => {},
  setExpenses: () => {},
  expenses: [],
});

function ExpenseProvider({children}: ExpenseProvidersProps) {
  const [selectedExpense, setSelectedExpense] = useState('');
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const _setExpenses = (data?: Expense[]) => {
    const uniqueIds = new Set();
    console.log(data);
    let filteredData = data?.filter((element: Expense) => {
      const isDuplicate = uniqueIds.has(element._id);

      uniqueIds.add(element._id);

      if (!isDuplicate) {
        return true;
      }
    });

    let orderedData = filteredData?.sort(function (a, b) {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB.getTime() - dateA.getTime();
    });

    setExpenses(orderedData || []);
  };

  return (
    <ExpenseContext.Provider
      value={{
        selectedExpense,
        setSelectedExpense,
        expenses,
        setExpenses: _setExpenses,
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
