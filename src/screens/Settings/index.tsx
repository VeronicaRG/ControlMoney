import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {useUserContext} from '../../hooks/auth';
import SettingsView from './view';

const SettingScreen: React.FC = () => {
  const {i18n} = useTranslation();
  const navigation = useNavigation();
  const {setUser} = useUserContext();

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
      goback={navigation.goBack}
      changeLanguage={changeCurrentLanguage}
      Logout={() => {
        setUser();
        navigation.reset({
          index: 0,
          routes: [{name: 'Login'}],
        });
      }}
    />
  );
};

export default SettingScreen;
