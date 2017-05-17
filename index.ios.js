/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
} from 'react-native';

var Manager = React.createClass({
  render(){

  return(
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to React Native!
      </Text>
      <Text style={styles.instructions}>
        To get started, edit index.ios.js
      </Text>
      <Text style={styles.instructions}>
        Press Cmd+R to reload,{'\n'}
        Cmd+D or shake for dev menu
      </Text>
    </View>
  )
}
})
export default class BCPushNotificationManager extends Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
        component: Manager,
        title: 'RN View',
        passProps: { myProp: 'foo' },
  }}
      style={{flex: 1}}
      barTintColor='#179bff'
      tintColor='white'
      titleTextColor='white'
      backButtonTitle='返回'
     />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('BCPushNotificationManager', () => BCPushNotificationManager);
