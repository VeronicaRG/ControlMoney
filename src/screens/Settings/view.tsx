import React from 'react';
import {useTranslation} from 'react-i18next';
import BaseText from '../../components/BaseText';
import {theme} from '../../theme';
import {Option, GoBack, ViewGoBack, IconArrowRight, Container} from './styles';
import {SettingsProps} from './type';

const SettingsView: React.FC<SettingsProps> = ({
  goback,
  changeLanguage,
  Logout,
}) => {
  const {t} = useTranslation();

  return (
    <Container>
      <ViewGoBack
        onPress={() => {
          goback;
        }}>
        <GoBack>
          <IconArrowRight
            source={require('../../assets/images/arrowRight.png')}
          />
        </GoBack>
      </ViewGoBack>

      <Option onPress={changeLanguage}>
        <BaseText size="h4" color={theme.colors.neutral._99}>
          {t('Settings.Language')}
        </BaseText>
        <BaseText size="b4" color={theme.colors.neutral._99}>
          {t('Settings.ChangeLanguage')}
        </BaseText>
      </Option>
      <Option
        onPress={() => {
          Logout;
        }}>
        <BaseText size="h4" color={theme.colors.neutral._99}>
          {t('Settings.Logout')}
        </BaseText>
      </Option>
    </Container>
  );
};

export default SettingsView;
