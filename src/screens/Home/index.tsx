/* eslint-disable react-hooks/exhaustive-deps */
import {useNavigation} from '@react-navigation/native';
import {AxiosError} from 'axios';
import React, {useEffect} from 'react';
import {Alert} from 'react-native';
import {useExpenseContext} from '../../hooks/expenseContext';
import {listExpenses} from '../../Services/expensesServices';
import HomeView from './view';

const HomeScreen: React.FC = ({}) => {
  const {expenses, setExpenses} = useExpenseContext();
  const navigation = useNavigation();

  function onRequestError(error: AxiosError) {
    if (error.response?.status == 400) {
      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'Login'}],
      // });
    }
  }

  async function getExpenses() {
    const list = await listExpenses(1, 20).catch(onRequestError);
    setExpenses(list);
  }

  useEffect(() => {
    getExpenses();
  }, []);

  return <HomeView expenses={expenses} />;
};

export default HomeScreen;
