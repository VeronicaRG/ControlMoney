import api from '.';
import {Expense} from '../@types/expense';

export async function createExpenses(expenses: Expense) {
  const expense = await api.post('/expenses', expenses);
  return expense.data;
}
