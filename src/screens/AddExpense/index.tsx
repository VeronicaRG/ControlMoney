import React, {useState} from 'react';
import {createExpenses} from '../../Services/expensesServices';
import AddExpenseView from './view';

const AddExpenseScreen: React.FC = () => {
  const [date, setDate] = useState(new Date());
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState<number>(0);

  async function addExpense() {
    if (date && amount && description) {
      const expense = {
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        item: description,
        value: amount,
        additionalInfo: {},
      };
      // const expenseId = await createExpenses(expense);
      await createExpenses(expense);
    }
  }

  return (
    <AddExpenseView
      amount={amount}
      setAmount={setAmount}
      description={description}
      setDescription={setDescription}
      onPressViewData={() => setOpenModal(true)}
      openModal={openModal}
      date={date}
      confirm={_date => {
        setOpenModal(false);
        setDate(_date);
      }}
      cancel={() => {
        setOpenModal(false);
      }}
      addExpense={addExpense}
    />
  );
};

export default AddExpenseScreen;
