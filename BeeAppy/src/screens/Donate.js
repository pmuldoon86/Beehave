import React from 'react';
import { Linking, Text, TouchableOpacity } from 'react-native';
import StackNavigator from 'react-navigation';

export default class Donate extends React.Component {
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
