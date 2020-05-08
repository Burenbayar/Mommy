import React, {Component} from 'react';
import {Image, View, StyleSheet, Slider, Text} from 'react-native';
import Shop from '../Shop';
import Person from '../Person';
import ContentNews from '../../ContentNews';
import SeeMore from '../SeeMore';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createStackNavigator} from 'react-navigation-stack';

const HomeStack = createStackNavigator({
  ContentNews: {
    screen: ContentNews,
    navigationOptions: {
      header: false,
    },
  },
  SeeMore: {
    screen: SeeMore,
  },
});

export const TabNavigator = createBottomTabNavigator(
  {
    Person: {
      screen: Person,
      navigationOptions: {
        tabBarIcon: ({tintcolor}) => (
          <View>
            <Icon
              style={[{color: tintcolor}]}
              size={25}
              color="#707070"
              name={'md-person'}></Icon>
          </View>
        ),
        tabBarLabel: () => {
          return null;
        },
      },
    },
    ContentNews: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({tintcolor}) => (
          <View
            style={{
              backgroundColor: '#FA3D5A',
              width: 50,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 80,
              marginTop: -5,
            }}>
            <Image
              style={{}}
              source={require('../contentImage/mama_logo.png')}></Image>
          </View>
        ),
        tabBarLabel: () => {
          return null;
        },
      },
    },
    Shop: {
      screen: Shop,
      navigationOptions: {
        tabBarIcon: ({tintcolor}) => (
          <View>
            <Icon
              style={[{color: tintcolor}]}
              size={25}
              color="#707070"
              name={'ios-cart'}></Icon>
          </View>
        ),
        tabBarLabel: () => {
          return null;
        },
      },
    },
  },
  {
    initialRouteName: 'ContentNews',
    activeColor: 'white',
    inactiveColor: 'white',
    barStyle: {backgroundColor: 'white', height: hp('7.3%')},
  },
);

const AppNavigator = createAppContainer(TabNavigator);
export default class Navigate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AppNavigator />;
  }
}
