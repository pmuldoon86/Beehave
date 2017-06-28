import React from 'react';
import {
  View,
  Linking,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  Image
} from 'react-native';
import style from '../styles/style.js';
import StackNavigator from 'react-navigation';

export default class Donate extends React.Component {
  static navigationOptions = {
    title: 'Donation page',
  };
  render() {
    return (
      <View style={style.viewStyle}>
        <View style={style.donateListStyle}>
          <TouchableHighlight onPress={() => Linking.openURL('https://bumblebeeconservation.org/')}>
            <Image
              style={style.donateImageButtonStyle}
              source={require('../img/beeBBCT.jpg')}
            />
          </TouchableHighlight>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.planetbee.org/?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOgqauFbe6WgszbJRAfi-jP1atAuoRLGGTaaBjxlPMSUaAncB8P8HAQ')}>
            <Text style={style.donateText}>Planet Bees{'\n'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.buglife.org.uk/adopt-shrill-carder-bee?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOlQPJExuKhmXzG2o1_K-Jf4FYYnU2GQc0xTnpAfPlwkaAsa58P8HAQ')}>
            <Text style={style.donateText}>Adopt a Bumblebee{'\n'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
