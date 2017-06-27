import React from 'react';
import BeeButton from '../components/BeeButton';
import Donate from './Donate'
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';
import style from '../styles/style.js';


export default class Home extends React.Component {
  static navigationOptions = {
    title: 'BeeAppy',
  };
  render() {
   const { navigate } = this.props.navigation;

    return (
      <View>
        <Text style={style.homeTextStyle}>{'\n'}Spotted a bee?  Click the button!{'\n'}</Text>
        <BeeButton />
      
        <Button
          onPress={() => navigate('Donate')}
          title='Help the bees!'
        />
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
