import React from 'react';
import {
  View,
  Linking,
  Text,
  TouchableHighlight,
  Image
} from 'react-native';
import BeeButton from '../components/buttons/BeeButton'
import BeeFactButton from '../components/buttons/BeeFactButton'
import style from '../styles/style.js';
import StackNavigator from 'react-navigation';

export default class Donate extends React.Component {

  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={style.viewStyle}>
        <View style={style.donateListStyle}>
          <TouchableHighlight onPress={() => Linking.openURL('https://bumblebeeconservation.org/')}>
            <Image
              style={style.donateImageButtonStyle}
              source={require('../img/beeBBCT.jpg')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.planetbee.org/?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOgqauFbe6WgszbJRAfi-jP1atAuoRLGGTaaBjxlPMSUaAncB8P8HAQ')}>
            <Image
              style={style.donateImageButtonStyle}
              source={require('../img/planetbee.png')}
            />
          </TouchableHighlight>
          <TouchableHighlight onPress={() => Linking.openURL('https://www.buglife.org.uk/adopt-shrill-carder-bee?gclid=Cj0KEQjwp83KBRC2kev0tZzExLkBEiQAYxYXOlQPJExuKhmXzG2o1_K-Jf4FYYnU2GQc0xTnpAfPlwkaAsa58P8HAQ')}>
            <Image
              style={style.donateImageButtonStyle}
              source={require('../img/buglife.jpg')}
            />
          </TouchableHighlight>
        </View>

        <TouchableHighlight
          onPress={() => navigate('Home')}
          style={style.donateButton}>
          <Image
            style={style.imageButtonStyle}
            source={require('../img/beehive.png')}
          />
        </TouchableHighlight>

          <TouchableHighlight
            onPress={() => navigate('BeeHive')}
            style={style.beehiveButton}>
            <Image
              style={style.imageButtonStyle}
              source={require('../img/earth-globe.png')}
            />
          </TouchableHighlight>

          <View style={style.beeFactButton}>
            <BeeFactButton/>
          </View>
      </View>
    )
  }
}
