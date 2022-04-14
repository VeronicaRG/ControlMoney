import './assets/translation/i18next';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';
import {useTranslation} from 'react-i18next';
import BaseText from './components/BaseText';

const App: React.FC = () => {
  const {t} = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <BaseText size="h3" style={{marginTop: 50}}>
        {t('slogan')}
      </BaseText>
    </ThemeProvider>
  );
};

export default App;
