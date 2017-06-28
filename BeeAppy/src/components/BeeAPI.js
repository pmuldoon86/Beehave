import React, { Componenet } from 'react';
import { StyleSheet,
        TouchableHighlight,
        View,
        Text,
        AlertIOS
} from 'react-native';
import GetGeoLocation from './GetGeoLocation'

var location = new GetGeoLocation();

export default class BeeAPI extends React.Component {

  GETbee = () => {
    fetch("https://bee-appy.herokuapp.com/bees", {
      method: "GET",
      headers: {'Content-Type': 'application/json'},
    })
    .then((response) => response.json())
    .then((responseData) => {
      AlertIOS.alert(
        "GET response",
        "Response Body -> " + JSON.stringify(responseData)
      )
    })
    .done();
  }

  POSTbee = (geoData) => {
    var longitude = geoData.latitude
    var latitude = geoData.longitude
    fetch("https://bee-appy.herokuapp.com/bees", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({latitude: latitude, longitude: longitude})
    })
    .then((response) => response.json())
    .then((responseData) => {
      AlertIOS.alert(
        "Bee has been posted",
        "latitude: " + JSON.stringify(responseData.latitude) + "longitude: " + JSON.stringify(responseData.longitude)
      )
    })
    .catch((error) => {
      console.log(location.position.state);
    })
    .done();
  }
  render() {
    return null
  }
}
