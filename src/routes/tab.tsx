import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import AddExpenseScreen from '../screens/AddExpense';
import HomeScreen from '../screens/Home';

const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AddExpense" component={AddExpenseScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
