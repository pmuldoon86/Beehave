import React, { Componenet } from 'react';
import { StyleSheet,
        TouchableHighlight,
        View,
        Text,
        AlertIOS
} from 'react-native';

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

  POSTbee = () => {
    fetch("https://bee-appy.herokuapp.com/bees", {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({location: "location"})
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
}
