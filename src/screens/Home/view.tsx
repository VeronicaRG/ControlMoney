import React from 'react';
import {useTranslation} from 'react-i18next';
import BaseText from '../../components/BaseText';
import {Container} from './styles';

const HomeView: React.FC = () => {
  const {t} = useTranslation();

  return (
    <Container>
      <BaseText size="h3">{t('slogan')}</BaseText>
    </Container>
  );
};

export default HomeView;
