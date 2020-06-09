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
import Ionicons from 'react-native-vector-icons/Ionicons';

import ToolsScreen from './tools';
// import CameraScreen from './camera/index';
import NamesScreen from './name/name';
import BeltgelScreen from './beltgel/index';
import PhotoScreen from './camera/Photo';
import VideoScreen from './camera/Video';
import jin from './jingiinhynalt/jin';
import App from './stopwatch/App'

//////////////////////////////////////////
const Width = Dimensions.get('window').width;
const tabBarWidth = Width - 30;
const Tab = createMaterialTopTabNavigator(
  {
    Зураг: {
      screen: PhotoScreen,
    },
    Видео: {
      screen: VideoScreen,
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: '#000000',
      upperCaseLabel: false,
      scrollEnabled: false,
      inactiveBackgroundColor: 'white',
      indicatorStyle: {
        height: 30,
        top: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
      },
      style: {
        marginLeft: 15,
        marginRight: 15,
        borderWidth: 1,
        borderRadius: 20,
        height: 30,
        borderColor: '#F4F4F4',
        backgroundColor: '#F4F4F4',
        elevation: 0,
      },
      tabStyle: {
        justifyContent: 'center',
        width: tabBarWidth / 2,
      },
      labelStyle: {
        marginTop: -14,
      },
    },
  },
);
const MainStack = createStackNavigator(
  {
    Хэрэгсэл: {
      screen: ToolsScreen,
    },
    cameraScreen: {
      screen: Tab,
      navigationOptions: ({navigation}) => ({
        headerStyle: {elevation: 0, backgroundColor: '#F4F4F4'},
        headerTitleStyle: {color: '#000000', marginLeft: -34, elevation: 0},
        title: 'ЖИРЭМСНИЙ ЗУРАГ ОРУУЛАХ',
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.navigate('Хэрэгсэл')}>
            <Ionicons
              style={{marginLeft: 18}}
              name="ios-arrow-back"
              color="#00000050"
              size={30}
            />
          </TouchableOpacity>
        ),
      }),
    },
    namesScreen: {
      screen: NamesScreen,
    },
    beltgelScreen: {
      screen: BeltgelScreen,
    },
    tsagScreen: {
      screen: App,
    },
    jinScreen: {
      screen: jin,
    },
  },
  {initialRouteName: 'Хэрэгсэл', mode: 'modal'},
);

const AppNavigator = createAppContainer(MainStack);

export default class FirstScreen extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
