import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import style from '../styles/style.js';
import BeeAPI from './BeeAPI';
import GetGeoLocation from './GetGeoLocation';

const api = new BeeAPI();

export default class BeeButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null
    };
  }

  updateGeoLocation = (geoData) => {
    this.setState({ latitude:  geoData.latitude,
    longitude: geoData.longitude});
  }

  render() {
    var geo = this.state.geoLocation;
    return(
      <View>
        <GetGeoLocation passGeoLocation = {this.updateGeoLocation} />
        <Text>Current latitude: {JSON.stringify(this.state.latitude)}</Text>
        <Text>Current longitude: {JSON.stringify(this.state.longitude)}</Text>
        
        <TouchableHighlight
          onPress = {api.POSTbee({latitude: this.state.latitude, longitude: this.state.longitude})}>
          <Image
            style={style.imageButtonStyle}
            source={require('../img/beeAbstract2.jpg')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
