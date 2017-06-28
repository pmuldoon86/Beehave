import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/style.js';
import BeeAPI  from '../components/BeeAPI';
import StackNavigator from 'react-navigation';
import MapView from 'react-native-maps';
import GetGeoLocation from '../components/GetGeoLocation';

const api = new BeeAPI();

export default class BeeHive extends React.Component {

  static navigationOptions = {
    title: 'BeeHive',
  };

  constructor(props) {
    super(props)

    this.state = {
      markers: [],
      initlatitude: null,
      initlongitude: null
    }
  }

  updateGeoLocation = (geoData) => {
    this.setState({ initlatitude:  geoData.latitude,
    initlongitude: geoData.longitude});
  }

  componentWillMount() {
    fetch("https://bee-appy.herokuapp.com/bees").then((res) => res.json()).then((res) => {
      this.setState({
        markers: res
      })
    })
  }

  render() {
    console.log(this.state.markers);
    return (
      <View style={style.container}>
      <GetGeoLocation passGeoLocation = {this.updateGeoLocation} />
        <MapView style={style.map}
          initialRegion={{
            latitude: this.state.initlatitude,
            longitude: this.state.initlongitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {this.state.markers.map(marker => (
            <MapView.Marker
              coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
            />
          ))}
        </MapView>
      </View>
    );
  }
}
