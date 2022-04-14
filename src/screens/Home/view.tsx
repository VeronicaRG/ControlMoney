import React from 'react';
import {useTranslation} from 'react-i18next';
import BaseText from '../../components/BaseText';
import {useUserContext} from '../../hooks/auth';
import {Container} from './styles';

const HomeView: React.FC = () => {
  const {t} = useTranslation();
  const {user} = useUserContext();

  return (
    <Container>
      <BaseText size="h3">{t('slogan')}</BaseText>
      <BaseText size="h1">welcome {user.apelido}</BaseText>
    </Container>
  );
};

export default HomeView;
