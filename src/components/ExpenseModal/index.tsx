/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef, useState} from 'react';
import {Modalize} from 'react-native-modalize';
import {Expense} from '../../@types/expense';
import {useExpenseContext} from '../../hooks/expenseContext';
import {navigate} from '../../routes/rootNavigation';
import {getExpense} from '../../Services/expensesServices';
import BaseText from '../BaseText';
import {Container, Delete, Edit, Options, Symbol} from './styles';

const ExpenseModal: React.FC = () => {
  const [expenseOn, setExpenseOn] = useState<Expense>();
  const modalizeRef = useRef<Modalize>(null);
  const {selectedExpense, setSelectedExpense} = useExpenseContext();

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  async function showExpense() {
    const expense = await getExpense(selectedExpense!);
    setExpenseOn(expense);
  }

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
          <Edit
            onPress={() => {
              navigate('AddExpense', {expense: expenseOn});
              modalizeRef.current?.close();
            }}>
            <BaseText size="h3">✏️</BaseText>
          </Edit>
          <Delete>
            <BaseText size="h3">❌</BaseText>
          </Delete>
        </Options>
        <Symbol>
          <BaseText size="h1">💵</BaseText>
        </Symbol>
        <BaseText size="h1">{expenseOn?.value}</BaseText>
        <BaseText size="h3">{expenseOn?.item}</BaseText>
      </Container>
    </Modalize>
  );
};

export default ExpenseModal;
