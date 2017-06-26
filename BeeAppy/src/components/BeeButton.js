import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native';


export default class BeeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beesNum: 0
    };
  }
  addBee = () => {
    this.setState({
      beesNum: this.state.beesNum + 1
    });
  }

  render() {
    return(
      <TouchableHighlight
       onPress = {() => { this.addBee(); }}>
        <View>
          <Text>
            BeeButton {"\n"}
            {this.state.beesNum} bees
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}
