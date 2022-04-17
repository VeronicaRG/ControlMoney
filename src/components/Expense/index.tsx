import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Expense} from '../../@types/expense';

import BaseText from '../../components/BaseText';
import {useExpenseContext} from '../../hooks/expenseContext';
import {formatDate} from '../../utils/date';

import {Amount, Container, InfoView, LeftArrow, Symbol} from './styles';

const ExpenseComponent: React.FC<Expense> = props => {
  const {item, date, value} = props;
  const navigation = useNavigation();
  const {setSelectedExpense} = useExpenseContext();

  function onPressExpense() {
    setSelectedExpense(props._id!);
  }

  return (
    <Container onPress={onPressExpense}>
      <Symbol>
        <BaseText size="h3">💵</BaseText>
      </Symbol>
      <InfoView>
        <BaseText size="h4">{item}</BaseText>
        <BaseText size="b4">{formatDate(new Date(date))}</BaseText>
      </InfoView>
      <Amount>
        <BaseText size="h4">{value}</BaseText>
      </Amount>
      <LeftArrow
        onPress={() => {
          navigation.navigate('AddExpense', {expense: props});
        }}>
        <BaseText size="h1">➡️</BaseText>
      </LeftArrow>
    </Container>
  );
};

export default ExpenseComponent;
