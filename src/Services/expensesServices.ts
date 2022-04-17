import api from '.';
import {Expense} from '../@types/expense';

export async function createExpense(expense: Expense) {
  const response = await api.post('/expenses', expense);
  return response.data;
}

export async function listExpenses(pag: number, perPage: number) {
  const response = await api.get(`/expenses?page=${pag}&perPage=${perPage}`);
  return response.data;
}
export async function editExpense(id: string, expense: Expense) {
  const response = await api.put(`/expenses/${id}`, expense);
  return response;
}
