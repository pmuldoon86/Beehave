import React from 'react';
import BeeButton from '../components/BeeButton';
import BeeFactButton from '../components/BeeFactButton';
import GeoMapButton from '../components/GeoMapButton';
import GetGeoLocation from '../components/GetGeoLocation';
import Donate from './Donate';
import GeoMap from './GeoMap';
import style from '../styles/style.js';
import { StyleSheet, Text, View, Button, TouchableHighlight, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'BeeAppy',
  };
  render() {
    const { navigate } = this.props.navigation;
    const getGeoLocation = new GetGeoLocation();
    return(
      <View>
        <Text>Hi, welcome to BeeAppy </Text>
        <Text style={style.homeTextStyle}>{'\n'}Spotted a bee?  Click the button!{'\n'}</Text>
        <BeeButton />
        <Button
          onPress={() => navigate('Donate')}
          title='Help the bees!'
        />
        <BeeFactButton />
        <Button
          onPress={() => { navigate('GeoMap') }}
          title='GeoMap'
        />
        
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
