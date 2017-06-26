import React from 'react';
import { TouchableHighlight, View, Text, Image } from 'react-native';
import style from '../styles/style.js';



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
  };

  render() {
    return(
      <View>
        <TouchableHighlight
          onPress = {() => { this.addBee(); }}>
          <Image
            style={style.imageButtonStyle}
            source={require('../img/beeAbstract2.jpg')}
          />
        </TouchableHighlight>
        <Text>
          {'\n'}
          {this.state.beesNum} bees
        </Text>
      </View>
    );
  }
}
