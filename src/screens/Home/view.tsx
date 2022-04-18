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

import {
  AddExpense,
  AddIcon,
  Container,
  DegradeButton,
  GreetingView,
  SettingIcon,
  Settings,
  User,
  View,
} from './styles';
import {HomeProps} from './type';

const HomeView: React.FC<HomeProps> = ({expenses}) => {
  const {user} = useUserContext();
  const {t} = useTranslation();
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <Container safeArea={insets}>
      <View>
        <User source={require('../../assets/images/user.png')} />
        <GreetingView>
          <BaseText size="h3">{t('Home.greeting')}</BaseText>
          <BaseText size="b4">{user?.nickname}</BaseText>
        </GreetingView>
        <Settings
          onPress={() => {
            navigation.navigate('Settings');
          }}>
          <SettingIcon source={require('../../assets/images/settings.png')} />
        </Settings>
      </View>
      <BaseText
        style={{margin: theme.spaces.x1, marginLeft: theme.spaces.x5}}
        size="h5">
        {t('Home.expenses')}
      </BaseText>

      <FlatList
        data={expenses}
        keyExtractor={item => item._id!}
        contentContainerStyle={{paddingBottom: 120}}
        renderItem={({item}) => <Expense key={item._id!} {...item} />}
      />
      <AddExpense
        onPress={() => {
          navigation.navigate('AddExpense');
        }}>
        <DegradeButton>
          <AddIcon source={require('../../assets/images/add.png')} />
        </DegradeButton>
      </AddExpense>
    </Container>
  );
};

export default HomeView;
