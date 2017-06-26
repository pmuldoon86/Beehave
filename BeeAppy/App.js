import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  WebView,
  Linking,
  TouchableOpacity
} from 'react-native';
import Home from './src/screens/Home';
import { StackNavigator } from 'react-navigation';
import style from './src/styles/style.js'

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
        title='Link to Donation page'
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
      <TouchableOpacity onPress={() => Linking.openURL('http://bumblebeeconservation.org/')}>
      <Text>Help the Bees</Text>
    </TouchableOpacity>
  )
}
}

const BeeAppy = StackNavigator({
  Home: { screen: HomeScreen },
  Donate: { screen: Donate },
});

AppRegistry.registerComponent('BeeAppy', () => BeeAppy);
