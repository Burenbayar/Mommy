
import React from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';


import ToolsScreen from './tools';
// import CameraScreen from './camera/index';
import NamesScreen from './name/name';
import BeltgelScreen from './beltgel/index';
import PhotoScreen from './camera/Photo';
import VideoScreen from './camera/Video';
import Stopwatch from './stopwatch/stopwatch';
import { color } from 'react-native-reanimated';

const Tab = createMaterialTopTabNavigator(
  {
    Зураг: {
      screen: PhotoScreen,
    },
    Видео: {
      screen: VideoScreen,
    },
  },
  {initialRouteName: 'Зураг', mode: 'modal'},
);

const MainStack = createStackNavigator(
    {
        Хэрэгсэл: {
            screen: ToolsScreen,
        },
        cameraScreen: {
            screen: Tab,
        },
        namesScreen: {
            screen: NamesScreen,
        },
        beltgelScreen: {
            screen: BeltgelScreen,
        },
        tsagScreen: {
          screen: Stopwatch,
        },
    },
    {initialRouteName: 'Хэрэгсэл', mode: 'modal'}
);

const AppNavigator = createAppContainer(MainStack);

export default class FirstScreen extends React.Component {
  render () {
    return <AppNavigator style={styles.tabs}/>
}
}
const styles=StyleSheet.create({
  tabs: {
    backgroundColor:'red',
    color:'red'
  },
  Зураг: {
    backgroundColor: 'red'
  }
})