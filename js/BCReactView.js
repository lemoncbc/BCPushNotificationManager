'use static'
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS,
  NativeModules,
  NativeEventEmitter,
  AlertIOS,
} from 'react-native';

const BCNotificationManage = NativeModules.BCNotificationManager;
const PushNotificationEmitter = new NativeEventEmitter(BCNotificationManage);
const DEVICE_NOTIF_EVENT = 'BCSendNotificationToReactNative';
var RNBridgeModule = NativeModules.BCRNBridgeModule;



export default class BCReactView extends Component{

  constructor(props)
  {
    super(props)
  }
  componentDidMount()
  {
    //添加接收通知者
    var nativeListener =  PushNotificationEmitter.addListener(

        DEVICE_NOTIF_EVENT,
        //收到通知后要做的事情
        (notifData) => {
          RNBridgeModule.pop((a) =>{
            AlertIOS.alert(
              '收到通知',
              '参数内容:'+notifData.msg,
              [
                {text: '确定', onPress: () => console.log('foo Pressed!')},
              ]
            )
          })
        }
      );
  }
componentWillUnmount()
{
  PushNotificationEmitter.removeListeners(1);
}
  render(){

  return(
    <View style = {styles.container}>
    <TouchableOpacity style={styles.touchButton} onPress={this.openNativeView.bind(this)}>
    <Text>打开原生界面</Text>
    </TouchableOpacity>
    </View>
  )
}
openNativeView()
{
  RNBridgeModule.openNativeView();
}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  touchButton:{
    backgroundColor:'#12aaff',
    height:50,
    width:120,
    justifyContent:'center',
    alignItems:'center',
  }
})
