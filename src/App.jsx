import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTab';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content" // Màu của chữ (white/dark)
        backgroundColor="#074cfa" // Màu nền của status bar
      />
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
