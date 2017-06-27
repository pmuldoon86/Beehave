import React from 'react';
<<<<<<< HEAD
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import Home from './src/Home';
import GeoMap from './src/GeoMap'
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'BeeAppy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Home></Home>
        <Button
          onPress={() => navigate('Donate')}
          title='Link to Donation page'
        />
        <Button
          onPress={() => navigate('GeoMap')}
          title='Link to Map'
        />
        <Text>Home page content</Text>
      </View>
    );
  }
}

class Donate extends React.Component {
  static navigationOptions = {
    title: 'Donation page',
  };
  render() {
    return <Text>Donation content</Text>
  }
}
=======
import { AppRegistry } from 'react-native';
import Home from './src/screens/Home';
import Donate from './src/screens/Donate';
import { StackNavigator } from 'react-navigation';
import style from './src/styles/style.js';
>>>>>>> master

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const BeeAppy = StackNavigator({
  Home: { screen: Home },
  Donate: { screen: Donate },
  GeoMap: { screen: GeoMap }
});

AppRegistry.registerComponent('BeeAppy', () => BeeAppy);
