import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import style from '../../styles/style.js';
import BeeAPI from '../BeeAPI';

const api = new BeeAPI();

export default class BeeButton extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress = {api.POSTbee}>
          <Image
            style={style.beeButtonStyle}
            source={require('../../img/bee.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
