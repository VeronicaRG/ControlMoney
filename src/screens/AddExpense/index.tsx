import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {Expense} from '../../@types/expense';
import {useExpenseContext} from '../../hooks/expenseContext';
import {RootStackParamList} from '../../routes/stack';
import {createExpense, editExpense} from '../../Services/expensesServices';
import AddExpenseView from './view';
import * as yup from 'yup';
import {useTranslation} from 'react-i18next';
import {Alert} from 'react-native';

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
  const {expenses, setExpenses} = useExpenseContext();
  const {t} = useTranslation();

  async function handleExpense() {
    try {
      let expenseSchema = yup.object({
        value: yup
          .number()
          .required(t('AddExpense.errors.value.required'))
          .moreThan(0, t('AddExpense.errors.value.moreThan')),
        item: yup.string().required(t('AddExpense.errors.item.required')),
      });

      const expense = {
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        item: description,
        value: amount,
        additionalInfo: params?.expense.additionalInfo || {},
      };

      await expenseSchema.validate(expense, {abortEarly: false});

      if (isEditing) {
        await saveExpense(expense);
      } else {
        await addExpense(expense);
      }

      navigation.navigate('Home');
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        e?.errors.forEach(error => {
          Alert.alert('Error', error);
        });
      } else {
        Alert.alert('Error', t('General.error'));
      }
    }
  }

  async function addExpense(_expense: Expense) {
    const expenseId = await createExpense(_expense);
    setExpenses([
      ...expenses,
      {..._expense, _id: expenseId, date: date.toISOString()},
    ]);
  }

  async function saveExpense(_expense: Expense) {
    await editExpense(params?.expense._id!, _expense);
    setExpenses(
      expenses.map(item =>
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
