import './assets/translation/i18next';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

import StackNavigator from './routes/stack';

import {AuthProvider} from './hooks/auth';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <StackNavigator />
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
