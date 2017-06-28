import React, { Component } from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class GeoMapButton extends React.Component {

  render() {
    const { navigated } = this.props.navigation
    return (
      <View>
        <Button
          onPress={() => { navigated('GeoMap') }}
          title='GeoMap'
        />
      </View>
    );
  }

}
