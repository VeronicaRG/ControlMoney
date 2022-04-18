import i18next from 'i18next';

export function formatValue(value: number = 0) {
  return value.toLocaleString(i18next.t('Expense.CurrencyName'), {
    style: 'currency',
    currency: i18next.t('Expense.Currency'),
  });
}
