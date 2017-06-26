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

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'BeeAppy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={
        {backgroundColor: '#ff73d6',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
        }
      }>
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
