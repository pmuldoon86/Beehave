import React from 'react';
import BeeButton from '../components/BeeButton';
import BeeFactButton from '../components/BeeFactButton';
import Donate from './Donate';
import style from '../styles/style.js';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Image
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'BeeAppy',
  };
  render() {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <Text>Hi, welcome to BeeAppy </Text>
        <Text style={style.homeTextStyle}>{'\n'}Spotted a bee?  Click the button!{'\n'}</Text>
        <BeeButton />
        <TouchableHighlight
          onPress={() => navigate('Donate')}>
          <Image
            style={style.imageButtonStyle}
            source={require('../img/honey.png')}
          />
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => navigate('BeeHive')}>
          <Image
            style={style.imageButtonStyle}
            source={require('../img/earth-globe.png')}
          />
        </TouchableHighlight>
        <BeeFactButton />
      </View>
    );
  }
}
