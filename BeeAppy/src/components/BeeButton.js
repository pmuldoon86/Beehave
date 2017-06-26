import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';
import BeeAPI from './BeeAPI';

const api = new BeeAPI();

export default class BeeButton extends React.Component {

  render() {
    return(
      <View>
        <TouchableHighlight
          onPress = {api.POSTbee}>
          <Text>BeeButton</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
