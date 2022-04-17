import './assets/translation/i18next';
import './config/reactotron';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

import StackNavigator from './routes/stack';

import {AuthProvider} from './hooks/auth';
import ExpenseModal from './components/ExpenseModal';
import {ExpenseProvider} from './hooks/expenseContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <ExpenseProvider>
          <StackNavigator />
          <ExpenseModal />
        </ExpenseProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
