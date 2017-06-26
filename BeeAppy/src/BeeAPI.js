import React, { Componenet } from 'react';
import { StyleSheet, TouchableHighlight, View, Text, AlertIOS } from 'react-native';

export default class BeeAPI extends React.Component {
  _onPressButtonPOST = () => {
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

  render() {
        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this._onPressButtonGET}>
                    <Text>GET</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this._onPressButtonPOST}>
                    <Text>POST</Text>
                </TouchableHighlight>
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
 });
