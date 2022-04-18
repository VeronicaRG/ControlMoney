import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native';
import BaseText from '../../components/BaseText';
import {theme} from '../../theme';
import {
  Button,
  ChangeLanguage,
  Container,
  Degrade,
  DegradeButton,
  Input,
  Symbol,
  ViewButtonChangeLanguage,
} from './styles';
import {LoginProps} from './types';

const LoginView: React.FC<LoginProps> = ({
  onPress,
  valueEmail,
  onChangeTextEmail,
  valueNickname,
  onChangeTextNickname,
  loading,
  changeLanguage,
}) => {
  const {t} = useTranslation();
  return (
    <Degrade>
      <Container>
        <ViewButtonChangeLanguage>
          <ChangeLanguage onPress={changeLanguage}>
            <BaseText style={{textAlign: 'center'}} size="h1">
              {t('Language')}
            </BaseText>
          </ChangeLanguage>
        </ViewButtonChangeLanguage>

        <BaseText style={{textAlign: 'center'}} size="h1" color={'#2E2834'}>
          Control Money
        </BaseText>
        <Symbol source={require('../../assets/images/money.png')} />

        <Input
          value={valueEmail}
          onChangeText={onChangeTextEmail}
          placeholder={t('Login.email')}
        />
        <Input
          value={valueNickname}
          onChangeText={onChangeTextNickname}
          placeholder={t('Login.nickname')}
        />
        <Button onPress={onPress}>
          <DegradeButton>
            {(loading && (
              <ActivityIndicator color={theme.colors.neutral._00} />
            )) || (
              <BaseText color={theme.colors.neutral._00} size="h4">
                {t('button')}
              </BaseText>
            )}
          </DegradeButton>
        </Button>
      </Container>
    </Degrade>
  );
};

export default LoginView;
