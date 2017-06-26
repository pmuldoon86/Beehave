import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  WebView,
  Linking,
  TouchableOpacity,
  Image
} from 'react-native';
import Home from './src/screens/Home';
import { StackNavigator } from 'react-navigation';
import style from './src/styles/style.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'BeeAppy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={style.viewStyle}>
        <Home></Home>
        <Button
          onPress={() => navigate('Donate')}
          title='Help the bees!'
        />
      </View>
    );
  }
}

class Donate extends React.Component {
  static navigationOptions = {
    title: 'Donation page',
  };
  render() {
    return (
      <View style={style.viewStyle}>
        <TouchableOpacity onPress={() => Linking.openURL('http://bumblebeeconservation.org/')}>
          <Text>Help the Bees</Text>
        </TouchableOpacity>
      </View>
  )
}
}

const BeeAppy = StackNavigator({
  Home: { screen: HomeScreen },
  Donate: { screen: Donate },
});

AppRegistry.registerComponent('BeeAppy', () => BeeAppy);
