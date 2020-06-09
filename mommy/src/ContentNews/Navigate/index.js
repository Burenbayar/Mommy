import React, {Component} from 'react';
import {Image, View} from 'react-native';
import Shop from '../Shop';
import StackNavigation from '../../Form/StackNavigation';
import Home from '../../Group/Home/home';
import Live from '../../Group/Home/Live';
import ContentNews from '../../ContentNews';
import SeeMore from '../SeeMore';
import Savenews from '../SavedNews/Savenews';
import tools from '../../tools/index';
import Lavlah from '../../Lavlah/Lavlah/Lavlah';
import BaiguulgaPro from '../../Lavlah/BaiguulgaPro';
import DrawContent from './DrawContent';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Iconn from 'react-native-vector-icons/Entypo';
import RefIcon from 'react-native-vector-icons/AntDesign';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator, DrawerItems} from 'react-navigation-drawer';
const GroupStack = createStackNavigator({
  GroupHome: {
    screen: Home,
    navigationOptions: {
      header: false,
    },
  },
  Forum: {
    screen: StackNavigation,
    navigationOptions: {
      headerTitle: 'Форум',
    },
  },
  Live: {
    screen: Live,
    navigationOptions: {
      headerTitle: 'Live',
    },
  },
});
const TabNavigator = createBottomTabNavigator(
  {
    Person: {
      screen: GroupStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: () => (
          <View>
            <Icon
              style={[{color: '#9E9898'}]}
              size={25}
              name={'md-person'}></Icon>
          </View>
        ),
        tabBarLabel: () => {
          return null;
        },
        tabBarVisible: navigation.state.index == 0,
      }),
    },
    ContentNews: {
      screen: ContentNews,
      navigationOptions: {
        tabBarIcon: () => (
          <View
            style={{
              backgroundColor: '#FA3D5A',
              width: wp('14%'),
              height: wp('14%'),
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: wp('14%') / 2,
              marginTop: -5,
            }}>
            <Image source={require('../contentImage/mama_logo.png')}></Image>
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
        tabBarIcon: () => (
          <View>
            <Icon
              style={[{color: '#9E9898'}]}
              size={25}
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

const DrawerContent = (props) => (
  <View>
    <DrawContent navigation={props.navigation} />
    <DrawerItems {...props} />
  </View>
);

const Drawer = createDrawerNavigator(
  {
    Home: {
      screen: TabNavigator,
      navigationOptions: {
        drawerIcon: () => (
          <View>
            <Icon
              style={[{color: '#9E9898'}]}
              size={25}
              name={'md-home'}></Icon>
          </View>
        ),
      },
    },
    SavedNews: {
      screen: Savenews,
      navigationOptions: {
        drawerIcon: () => (
          <View>
            <Icon
              style={[{color: '#9E9898'}]}
              size={25}
              name={'md-heart'}></Icon>
          </View>
        ),
        drawerLabel: 'Хадгалсан мэдээ',
      },
    },
    tools: {
      screen: tools,
      navigationOptions: {
        drawerIcon: () => (
          <View>
            <Iconn
              style={[{color: '#9E9898'}]}
              size={23}
              name={'briefcase'}></Iconn>
          </View>
        ),
        drawerLabel: 'Миний хэрэгсэл',
      },
    },
    Lavlah: {
      screen: Lavlah,
      navigationOptions: {
        drawerIcon: () => (
          <View>
            <RefIcon
              style={[{color: '#9E9898'}]}
              size={23}
              name={'questioncircle'}></RefIcon>
          </View>
        ),
        drawerLabel: 'Лавлах',
      },
    },
  },
  {
    drawerPosition: 'left',
    statusBarBackgroundColor: '#FFFFFF',
    drawerWidth: wp('70%'),
    contentComponent: DrawerContent,
  },
);

const HomeStack = createStackNavigator({
  Drawer: {
    screen: Drawer,
    navigationOptions: {
      header: false,
    },
  },
  SeeMore: {
    screen: SeeMore,
    navigationOptions: {
      header: false,
    },
  },
  BaiguulgaPro: {
    screen: BaiguulgaPro,
    navigationOptions: {
      header: true,
    },
  },
});

const AppNavigator = createAppContainer(HomeStack);

export default class Navigate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AppNavigator />;
  }
}
