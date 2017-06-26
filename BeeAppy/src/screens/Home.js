import React from 'react';
import BeeButton from '../components/BeeButton';
import BeeFactButton from '../components/BeeFactButton';
import Donate from './Donate';

import { StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'BeeAppy',
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log("hello");
    return(
      <View style={styles.container}>
        <Text>Hi, welcome to BeeAppy </Text>
        <BeeButton />
        <Button
          onPress={() => navigate('Donate')}
          title='Link to Donation page'
        />
        <BeeFactButton />
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
