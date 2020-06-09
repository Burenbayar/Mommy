import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';

import PhotoScreen from './Photo';
import VideoScreen from './Video';
import {createStackNavigator} from 'react-navigation-stack';

const PhScreen = createStackNavigator({
  phScreen: { 
    screen: PhotoScreen, 
  }
});

const VdScreen = createStackNavigator({
  vScreen: { 
    screen: VideoScreen, 
  }
})

const Tab = createMaterialTopTabNavigator(
  {
    Зураг: {
      screen: PhScreen,
    },
    Видео: {
      screen: VdScreen,
    },
  },
  {initialRouteName: 'Зураг', mode: 'modal'},
);

const AppNavigator = createAppContainer(Tab);

export default class CameraScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <NavigationContainer>
        <AppNavigator style={styles.toptab} />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  toptab: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
  },
});
