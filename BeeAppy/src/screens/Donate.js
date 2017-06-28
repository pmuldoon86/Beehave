import React from 'react';
import {
  View,
  Linking,
  Text,
  TouchableOpacity
} from 'react-native';
import style from '../styles/style.js';
import StackNavigator from 'react-navigation';

export default class Donate extends React.Component {
  static navigationOptions = {
    title: 'Donation page',
  };
  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => Linking.openURL('https://bumblebeeconservation.org/')}>
          <Text>Bumblebee Conservation</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.planetbee.org/?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOgqauFbe6WgszbJRAfi-jP1atAuoRLGGTaaBjxlPMSUaAncB8P8HAQ')}>
          <Text>Planet Bees</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.buglife.org.uk/adopt-shrill-carder-bee?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOlQPJExuKhmXzG2o1_K-Jf4FYYnU2GQc0xTnpAfPlwkaAsa58P8HAQ')}>
          <Text>Adopt a Bumblebee</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
