import React, { Component } from 'react';
import { Stylesheet,
      TouchableHighlight,
      View,
      Text,
      AlertIOS
} from 'react-native';
import BeeFact from '../components/BeeFactApi';

const beeFact = new BeeFact();

export default class BeeFactButton extends React.Component {

  render() {
    return(
      <View>
        <TouchableHighlight
          onPress = {beeFact.getBeeFact}>
          <Text>Bee Fact</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
