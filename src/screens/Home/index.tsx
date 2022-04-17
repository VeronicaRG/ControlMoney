/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {useExpenseContext} from '../../hooks/expenseContext';
import {listExpenses} from '../../Services/expensesServices';
import HomeView from './view';

const HomeScreen: React.FC = ({}) => {
  const {expenses, setExpenses} = useExpenseContext();

  async function getExpenses() {
    const list = await listExpenses(1, 20);
    setExpenses(list);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  return <HomeView expenses={expenses} />;
};

export default HomeScreen;
