import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigation/BottomTab';
import {StatusBar} from 'react-native';
import {COLOR_DEFAULT} from './components/app/ColorApp';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content" // Màu của chữ (white/dark)
        backgroundColor={COLOR_DEFAULT} // Màu nền của status bar
      />
      <BottomTabNavigator />
    </NavigationContainer>
  );
};

export default App;
