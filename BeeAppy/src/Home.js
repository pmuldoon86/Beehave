import React from 'react';
import BeeButton from './BeeButton';
import { Text, View } from 'react-native';

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
