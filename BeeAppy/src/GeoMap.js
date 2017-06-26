import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';

export default class GeoMap extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };
  // Geolocation is built into React Native, takes initial state on line 18
  constructor(props) {
    super(props)

    this.state = {
      latitude: 0,
      longitude: 0,
      error: null,
    }
  }
  // Set geolocation to current position long and lat
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
    // print error if timed out or unable to find location
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  render() {
    return (
      <View style={styles.container}>
      // MapView displays the map using MapView tags
      // Takes 4 properties lat and long, and two delta properties to determine position on screen
        <MapView
          style={styles.map}
          initialRegion={{ latitude: this.state.latitude, longitude: this.state.longitude,
                           latitudeDelta: 0, longitudeDelta: 0}}
        />
      // Return current lattitude and longitude
          <Text>Latitude: {this.state.latitude}</Text>
          <Text>Longitude: {this.state.longitude}</Text>
        {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
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
  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },
});
