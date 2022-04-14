import './assets/translation/i18next';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

import StackNavigator from './routes/stack';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StackNavigator />
    </ThemeProvider>
  );
};

export default App;
