import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Expense} from '../../@types/expense';
import {useExpenseContext} from '../../hooks/expenseContext';
import {RootStackParamList} from '../../routes/stack';
import {createExpense, editExpense} from '../../Services/expensesServices';
import AddExpenseView from './view';

const AddExpenseScreen: React.FC = () => {
  const {params} = useRoute<RouteProp<RootStackParamList, 'AddExpense'>>();
  const [date, setDate] = useState(
    params?.expense?.date ? new Date(params?.expense?.date) : new Date(),
  );
  const [openModal, setOpenModal] = useState(false);
  const [description, setDescription] = useState(params?.expense?.item || '');
  const [amount, setAmount] = useState<number>(params?.expense?.value || 0);
  const isEditing = !!params?.expense;
  const navigation = useNavigation();
  const {setExpenses} = useExpenseContext();

  async function handleExpense() {
    if (date && amount && description) {
      const expense = {
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        item: description,
        value: amount,
        additionalInfo: params?.expense.additionalInfo || {},
      };
      if (isEditing) {
        await saveExpense(expense);
      } else {
        await addExpense(expense);
      }
      navigation.navigate('Home');
    }
  }

  async function addExpense(_expense: Expense) {
    const expenseId = await createExpense(_expense);
    setExpenses(actual => [
      ...actual,
      {..._expense, _id: expenseId, date: date.toISOString()},
    ]);
  }

  async function saveExpense(_expense: Expense) {
    await editExpense(params?.expense._id!, _expense);
    setExpenses(actual =>
      actual.map(item =>
        item._id === params?.expense._id
          ? {...item, ..._expense, date: date.toISOString()}
          : item,
      ),
    );
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
      action={handleExpense}
      isEditing={isEditing}
    />
  );
};

export default AddExpenseScreen;
