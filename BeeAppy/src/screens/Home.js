import React from 'react';
import BeeButton from '../components/BeeButton';
import { Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/style.js';


export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={style.homeTextStyle}>{'\n'}Spotted a bee?  Click the button!{'\n'}</Text>
        <BeeButton />
      </View>
    );
  }
}
