import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import BaseText from '../../components/BaseText';
import {useUserContext} from '../../hooks/auth';
import {theme} from '../../theme';

import {AddExpense, Container} from './styles';

const HomeView: React.FC = () => {
  const {user} = useUserContext();
  const {t} = useTranslation();
  const navigation = useNavigation();

  return (
    <Container>
      <BaseText size="h1">
        {t('Home.greeting', {nickname: user?.nickname})}
      </BaseText>
      <AddExpense
        onPress={() => {
          navigation.navigate('AddExpense');
        }}>
        <BaseText size="h9" color={theme.colors.neutral._00}>
          {t('Home.Button')}
        </BaseText>
      </AddExpense>
    </Container>
  );
};

export default HomeView;
