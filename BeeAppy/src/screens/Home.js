import React from 'react';
import BeeButton from '../components/BeeButton';
import BeeFactButton from '../components/BeeFactButton';
import GetGeoLocation from '../components/GetGeoLocation';
import Donate from './Donate';
import style from '../styles/style.js';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
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
        <Button
          onPress={() => navigate('Donate')}
          title='Help the bees!'
        />
        <Button
          onPress={() => navigate('BeeHive')}
          title='See the bees!'
        />
        <BeeFactButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
