import React from 'react';
import {useTranslation} from 'react-i18next';
import {ActivityIndicator} from 'react-native';
import BaseText from '../../components/BaseText';
import {theme} from '../../theme';
import {Button, Container, Degrade, Input, Symbol} from './styles';
import {LoginProps} from './types';

const LoginView: React.FC<LoginProps> = ({
  onPress,
  valueEmail,
  onChangeTextEmail,
  valueNickname,
  onChangeTextNickname,
  loading,
}) => {
  const {t} = useTranslation();
  return (
    <Degrade>
      <Container>
        <BaseText
          style={{textAlign: 'center'}}
          size="h1"
          color={theme.colors.neutral._00}>
          Control Money
        </BaseText>
        <Symbol />

        <Input
          value={valueEmail}
          onChangeText={onChangeTextEmail}
          placeholder="Digite seu email"
        />
        <Input
          value={valueNickname}
          onChangeText={onChangeTextNickname}
          placeholder="Digite seu "
        />
        <Button onPress={onPress}>
          {(loading && <ActivityIndicator color={'black'} />) || (
            <BaseText color={theme.colors.neutral._00} size="h4">
              {t('button')}
            </BaseText>
          )}
        </Button>
      </Container>
    </Degrade>
  );
};

export default LoginView;
