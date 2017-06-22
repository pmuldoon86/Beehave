import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';
import Home from './src/Home';
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

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Donate: { screen: Donate },
});

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
   },
 });

export default SimpleApp;
