import React from 'react';
import { Button } from 'react-native';


export default class BeeButton extends React.Component {
  render() {
    var bee = 0;
    return(
      <Button onPress={() => {bee=bee+1, console.log(bee)}}
              title="BeeButton"
      />
    );
  }
}
