import React, { Component } from 'react';
import { Stylesheet,
      TouchableHighlight,
      View,
      Text,
      Image,
      AlertIOS
} from 'react-native';
import BeeFact from '../../components/BeeFactApi';
import style from '../../styles/style.js';


const beeFact = new BeeFact();

export default class BeeFactButton extends React.Component {

  render() {
    return(
      <View>
        <TouchableHighlight
          onPress = {beeFact.getBeeFact}>
          <Image
            style={style.imageButtonStyle}
            source={require('../../img/flower.png')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
