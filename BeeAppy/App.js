import React from 'react';
import { AppRegistry } from 'react-native';
import Home from './src/screens/Home';
import Donate from './src/screens/Donate';
import { StackNavigator } from 'react-navigation';
import style from './src/styles/style.js';

const BeeAppy = StackNavigator({
  Home: { screen: Home },
  Donate: { screen: Donate },
});

AppRegistry.registerComponent('BeeAppy', () => BeeAppy);
