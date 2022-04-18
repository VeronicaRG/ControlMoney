/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Alert} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {Expense} from '../../@types/expense';
import {useExpenseContext} from '../../hooks/expenseContext';
import {navigate} from '../../routes/rootNavigation';
import {deleteExpense, getExpense} from '../../Services/expensesServices';
import BaseText from '../BaseText';
import {
  Close,
  Container,
  Delete,
  Edit,
  Options,
  Options2,
  Symbol,
} from './styles';

const ExpenseModal: React.FC = () => {
  const [expenseOn, setExpenseOn] = useState<Expense>();
  const modalizeRef = useRef<Modalize>(null);
  const {selectedExpense, setSelectedExpense} = useExpenseContext();
  const {t} = useTranslation();
  const {expenses, setExpenses} = useExpenseContext();

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  async function showExpense() {
    try {
      const expense = await getExpense(selectedExpense!);
      setExpenseOn(expense);
    } catch (e) {
      Alert.alert('Error', t('General.error'));
    }
  }

  async function deleteOnExpense() {
    try {
      await deleteExpense(selectedExpense!);
      setExpenses(expenses.filter(item => item._id !== selectedExpense));
      modalizeRef.current?.close();
    } catch (e) {
      Alert.alert('Error', t('General.error'));
    }
  }

  const alertDeleteExpense = () =>
    Alert.alert(t('ExpenseModal.Alert'), t('ExpenseModal.AlertMessage'), [
      {
        text: t('ExpenseModal.AlertCancel'),
        style: 'cancel',
      },
      {
        text: t('ExpenseModal.AlertYes'),
        onPress: deleteOnExpense,
      },
    ]);

  useEffect(() => {
    if (selectedExpense) {
      showExpense();
      onOpen();
    }
  }, [selectedExpense]);

  return (
    <Modalize
      modalHeight={270}
      onClosed={() => {
        setSelectedExpense('');
      }}
      ref={modalizeRef}>
      <Container>
        <Options>
          <Options2>
            <Edit
              onPress={() => {
                navigate('AddExpense', {expense: expenseOn});
                modalizeRef.current?.close();
              }}>
              <BaseText size="h3">✏️</BaseText>
            </Edit>
            <Delete onPress={() => alertDeleteExpense()}>
              <BaseText size="h3">🗑️</BaseText>
            </Delete>
          </Options2>
          <Close
            onPress={() => {
              modalizeRef.current?.close();
            }}>
            <BaseText size="h3">❌</BaseText>
          </Close>
        </Options>
        <Symbol source={require('../../assets/images/money.png')} />
        <BaseText size="h1">{expenseOn?.value}</BaseText>
        <BaseText size="h3">{expenseOn?.item}</BaseText>
      </Container>
    </Modalize>
  );
};

export default ExpenseModal;
