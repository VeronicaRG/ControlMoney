import React from 'react';
import BaseText from '../../components/BaseText';
import {theme} from '../../theme';
import {Button, Container, Degrade, Input, Symbol} from './styles';
import {LoginProps} from './types';

const LoginView: React.FC<LoginProps> = ({
  onPress,
  valueEmail,
  onChangeTextEmail,
  valueApelido,
  onChangeTextApelido,
}) => {
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
          value={valueApelido}
          onChangeText={onChangeTextApelido}
          placeholder="Digite seu apelido"
        />
        <Button onPress={onPress}>
          <BaseText color={theme.colors.neutral._00} size="h4">
            sign up
          </BaseText>
        </Button>
      </Container>
    </Degrade>
  );
};

export default LoginView;
