import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MapView from 'react-native-maps';

export default class GeoMap extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };
  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 8.8922,
            longitudeDelta: 8.8421,
          }}>
        </MapView>
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
