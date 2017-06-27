import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/style.js';
import BeeAPI  from '../components/BeeAPI';
import StackNavigator from 'react-navigation';
import MapView from 'react-native-maps';

const api = new BeeAPI();

export default class BeeHive extends React.Component {

  static navigationOptions = {
    title: 'BeeHive',
  };
  constructor(props) {
    super(props)

    this.state = {
      markers: [{
        coordinates: {
          latitude: 37.78825,
          longitude: -122.4399
        },
      },
      {
        coordinates: {
          latitude: 37.78826,
          longitude: -122.4600
        },
      }]
    }
  }

  render() {
    return (
      <View style={style.container}>
        <MapView style={style.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={marker.coordinates}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
