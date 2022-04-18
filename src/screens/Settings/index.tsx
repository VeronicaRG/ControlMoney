// import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import SettingsView from './view';

const SettingScreen: React.FC = () => {
  const {i18n} = useTranslation();
  // const navigation = useNavigation();
  function changeCurrentLanguage() {
    if (i18n.language === 'en') {
      return i18n.changeLanguage('es');
    } else if (i18n.language === 'es') {
      return i18n.changeLanguage('pt-BR');
    }
    return i18n.changeLanguage('en');
  }

  return (
    <SettingsView
      // goback={navigation.goBack()}
      // changeLanguage={changeCurrentLanguage}
      // Logout={{}}
      goback={{}}
      changeLanguage={changeCurrentLanguage}
      Logout={{}}
    />
  );
};

export default SettingScreen;
