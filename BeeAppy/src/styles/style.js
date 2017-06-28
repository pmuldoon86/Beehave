import React from 'react-native';
var { StyleSheet } = React;

var style = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#fff6fb',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },

  homeTextStyle: {
    fontSize: 20,
    backgroundColor: '#ffcd6d',
    justifyContent: 'center',
  },

  imageButtonStyle: {
    width: 50, height: 50,
    alignItems: 'center',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff6fb',
  },

  map: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
  },

  donateListStyle: {
    flex: 1,
    flexDirection: 'column',
  },

  donateText: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },

  donateImageButtonStyle: {
    width: 150, height: 50,
    alignItems: 'center',
  },
});

export default style;
