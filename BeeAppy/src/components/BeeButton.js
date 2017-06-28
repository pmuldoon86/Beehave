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
      geoLocation: null
    };
  }

  updateGeoLocation = (geoData) => {
    this.setState({ geoLocation:  geoData});
  }

  render() {
    var geo = this.state.geoLocation;
    return(
      <View>
        <GetGeoLocation passGeoLocation = {this.updateGeoLocation} />
        <Text>Current location: {JSON.stringify(this.state.geoLocation)}</Text>
        <BeeAPI geoDATA = {geo} />
        <TouchableHighlight
          onPress = {api.POSTbee}>
          <Image
            style={style.imageButtonStyle}
            source={require('../img/beeAbstract2.jpg')}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
