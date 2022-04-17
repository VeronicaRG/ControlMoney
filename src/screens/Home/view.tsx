// import {useNavigation} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BaseText from '../../components/BaseText';
import Expense from '../../components/Expense';
import {useUserContext} from '../../hooks/auth';
import {theme} from '../../theme';

import {AddExpense, Container, View} from './styles';
import {HomeProps} from './type';

const HomeView: React.FC<HomeProps> = ({expenses}) => {
  const {user} = useUserContext();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <View>
        <BaseText size="h3">
          {t('Home.greeting', {nickname: user?.nickname})}
        </BaseText>
        <AddExpense
          onPress={() => {
            navigation.navigate('AddExpense');
          }}>
          <BaseText size="h1" color={theme.colors.neutral._00}>
            +
          </BaseText>
        </AddExpense>
      </View>

      <FlatList
        data={expenses}
        keyExtractor={item => item._id!}
        renderItem={({item}) => <Expense key={item._id!} {...item} />}
      />
    </Container>
  );
};

export default HomeView;
