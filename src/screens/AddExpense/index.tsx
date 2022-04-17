import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
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

  async function addExpense() {
    if (date && amount && description) {
      const expense = {
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        item: description,
        value: amount,
        additionalInfo: {},
      };
      // const expenseId = await createExpense(expense);
      await createExpense(expense);
    }
    navigation.navigate('Home');
  }

  async function saveExpense() {
    if (date && amount && description) {
      const expense = {
        date: `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`,
        item: description,
        value: amount,
        additionalInfo: params?.expense.additionalInfo || {},
      };
      await editExpense(params?.expense._id!, expense);
    }
    navigation.navigate('Home');
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
      action={isEditing ? saveExpense : addExpense}
      isEditing={isEditing}
    />
  );
};

export default AddExpenseScreen;
