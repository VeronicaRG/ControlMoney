import './assets/translation/i18next';
import React from 'react';
import {Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {useTranslation} from 'react-i18next';

const App: React.FC = () => {
  const {t} = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <Text>{t('slogan')}</Text>
    </ThemeProvider>
  );
};

export default App;
