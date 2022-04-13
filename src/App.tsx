import React from 'react';
import {View} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <View />
    </ThemeProvider>
  );
};

export default App;
