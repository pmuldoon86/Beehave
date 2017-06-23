// import React, { Component } from 'react';
//
// import {
//   View,
//   StyleSheet,
//   WebView
// } from 'react-native';
// import { Constants } from 'expo';
//
// export default BumblebeeView = (props) => {
//   return (
//     <View style = {styles.container}>
//       <WebView automaticallyAdjustContentInsets={false}
//                source={{uri: 'http://bumblebeeconservation.org/'}}
//                javaScriptEnabled={true}
//                domStorageEnabled={true}
//                decelerationRate="normal"
//                startInLoadingState={true}
//       />
//     </View>
//   );
// };
//
// const styles = StyleSheet.create ({
//    container: {
//       flex: 1,
//       marginTop: 67,
//    },
// });

import React, { Component } from 'react';
import { View, WebView } from 'react-native';

export default class BumblebeeView extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://github.com/facebook/react-native'}}
        style={{marginTop: 20,
                flex: 1}}
      />
    );
  }
}
