import React from 'react';
import BeeButton from '../components/BeeButton';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  render() {
    return(
      <View>
        <Text>Hi, welcome to BeeAppy </Text>
        <BeeButton />
      </View>
    );
  }
}
