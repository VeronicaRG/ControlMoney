import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './tab';
import LoginScreen from '../screens/Login';
import {Expense} from '../@types/expense';
import AddExpenseScreen from '../screens/AddExpense';

type AddExpenseProps = {
  expense: Expense;
};

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Logged: undefined;
  AddExpense: AddExpenseProps | undefined;
};

const StackNavigator: React.FC = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Logged"
          component={TabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddExpense"
          component={AddExpenseScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
