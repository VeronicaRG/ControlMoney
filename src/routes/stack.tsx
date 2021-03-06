import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import LoginScreen from '../screens/Login';
import {Expense} from '../@types/expense';
import AddExpenseScreen from '../screens/AddExpense';
import {navigationRef} from './rootNavigation';
import HomeScreen from '../screens/Home';
import SettingScreen from '../screens/Settings';

type AddExpenseProps = {
  expense: Expense;
};

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Settings: undefined;
  AddExpense: AddExpenseProps | undefined;
};

const StackNavigator: React.FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpenseScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Settings"
          component={SettingScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
