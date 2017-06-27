import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import style from '../styles/style.js';
import StackNavigator from 'react-navigation';
import MapView from 'react-native-maps';

export default class BeeHive extends React.Component {
  render() {
    return (
      <View style={style.container}>
        <MapView style={style.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}
