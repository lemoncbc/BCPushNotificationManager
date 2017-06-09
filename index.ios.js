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

import BCReactView from './js/BCReactView';
export default class BCPushNotificationManager extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={{
        component: BCReactView,
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
