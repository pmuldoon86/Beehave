import React, { Component } from 'react';
import { StyleSheet,
        TouchableHighlight,
        View,
        Text,
        AlertIOS
} from 'react-native';

export default class BeeAPI extends React.Component {

  GETbee = () => {
    fetch("http://localhost:3000/bees", {
      method: "GET",
      headers: {'Content-Type': 'application/json'},
    })
    .then((response) => response.json())
  }

  POSTbee = () => {
    fetch("http://localhost:3000/bees", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({latitude: 37.79125, longitude: -122.4134})
    })
    .then((response) => response.json())
    .then((responseData) => {
      AlertIOS.alert(
        "Bee has been posted",
        "Response Body -> " + JSON.stringify(responseData)
      )
    })
    .done();
  }
  render() {
    return null
  }
}
