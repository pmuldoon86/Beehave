import React from 'react';
import BeeButton from '../components/BeeButton';
import { Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  render() {
    return(
      <View>
        <Text style={
          { backgroundColor: '#ffcd6d',
            justifyContent: 'center',
            alignItems: 'center'
          }
        }>Hi, welcome to BeeAppy </Text>
        <BeeButton />
      </View>
    );
  }
}
