import './assets/translation/i18next';
import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {theme} from './theme';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {View} from 'react-native';
import HomeScreen from './screens/Home';

const App: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
