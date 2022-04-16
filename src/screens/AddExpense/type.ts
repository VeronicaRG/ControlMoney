export interface AddExpenseProps {
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
  onPressViewData: () => void;
  openModal: boolean;
  date: Date;
  confirm: (date: Date) => void;
  cancel: () => void;
  addExpense: () => void;
}
