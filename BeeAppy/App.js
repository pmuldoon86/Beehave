import React from 'react';
import { AppRegistry } from 'react-native';
import Home from './src/screens/Home';
import Donate from './src/screens/Donate';
import GeoMap from './src/screens/GeoMap'
import { StackNavigator } from 'react-navigation';

const BeeAppy = StackNavigator({
  Home: { screen: Home },
  Donate: { screen: Donate },
  GeoMap: { screen: GeoMap }
});

AppRegistry.registerComponent('BeeAppy', () => BeeAppy);
