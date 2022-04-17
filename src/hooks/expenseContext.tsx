import React, {createContext, ReactNode, useContext, useState} from 'react';

interface ExpenseProvidersProps {
  children: ReactNode;
}

type ExpenseContextProps = {
  selectedExpense?: string;
  setSelectedExpense: React.Dispatch<React.SetStateAction<string>>;
};

export const ExpenseContext = createContext<ExpenseContextProps>({
  setSelectedExpense: () => {},
});

function ExpenseProvider({children}: ExpenseProvidersProps) {
  const [selectedExpense, setSelectedExpense] = useState('');

  return (
    <ExpenseContext.Provider value={{selectedExpense, setSelectedExpense}}>
      {children}
    </ExpenseContext.Provider>
  );
}

function useExpenseContext() {
  const context = useContext(ExpenseContext);
  return context;
}

export {ExpenseProvider, useExpenseContext};
