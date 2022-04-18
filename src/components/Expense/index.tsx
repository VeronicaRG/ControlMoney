import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Expense} from '../../@types/expense';

import BaseText from '../../components/BaseText';
import {useExpenseContext} from '../../hooks/expenseContext';
import {formatDate} from '../../utils/date';
import {formatValue} from '../../utils/value';

import {
  Amount,
  Container,
  InfoView,
  LeftArrow,
  LeftArrowIcon,
  Symbol,
  Wraper,
} from './styles';

const ExpenseComponent: React.FC<Expense> = props => {
  const {item, date, value} = props;
  const navigation = useNavigation();
  const {setSelectedExpense} = useExpenseContext();

  function onPressExpense() {
    setSelectedExpense(props._id!);
  }

  return (
    <Wraper onPress={onPressExpense}>
      <Container>
        <Symbol source={require('../../assets/images/money.png')} />
        <InfoView>
          <BaseText size="h4">{item}</BaseText>
          <BaseText size="b4">{formatDate(new Date(date))}</BaseText>
        </InfoView>
        <Amount>
          <BaseText size="h6">{formatValue(value)}</BaseText>
        </Amount>
        <LeftArrow
          onPress={() => {
            navigation.navigate('AddExpense', {expense: props});
          }}>
          <LeftArrowIcon
            source={require('../../assets/images/arrowLeft.png')}
          />
        </LeftArrow>
      </Container>
    </Wraper>
  );
};

export default ExpenseComponent;
