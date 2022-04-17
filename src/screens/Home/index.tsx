import React, {useEffect, useState} from 'react';
import {listExpenses} from '../../Services/expensesServices';
import HomeView from './view';

const HomeScreen: React.FC = ({}) => {
  const [expenses, setExpenses] = useState([]);

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
