import React, {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import News from '../News';
import NewsComponent from '../../Common/NewsComponent/newsComponent';
import saveJson from './saveJson';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
const Tab = createMaterialTopTabNavigator(
  {
    Мэдээлэл: {
      screen: (props) => (
        <News
          newsCheck={false}
          items={saveJson}
          navigation={props.screenProps.navigation}
        />
      ),
    },
    Эмч: {
      screen: (props) => (
        <News
          newsCheck={false}
          items={saveJson}
          navigation={props.screenProps.navigation}
        />
      ),
    },
    Байгууллага: {
      screen: NewsComponent,
    },
    Видео: {
      screen: NewsComponent,
    },
  },
  {
    initialRouteName: 'Мэдээлэл',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: '#BEB5B5',
      upperCaseLabel: false,
      style: {
        backgroundColor: 'transparent',
        marginTop: hp('-1%'),
        width: wp('97%'),
        marginLeft: hp('1%'),
      },
      labelStyle: {
        fontSize: 11,
      },
      tabStyle: {
        marginHorizontal: wp('-10%'),
      },
      indicatorStyle: {
        width: wp('24%'),

        marginVertical: wp('3%'),
        backgroundColor: '#BEB5B5',
        height: hp('4%'),
        top: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
      },
    },
  },
);
const App = createStackNavigator({
  TabScreen: {
    screen: Tab,
    navigationOptions: ({screenProps}) => ({
      headerStyle: {
        backgroundColor: 'transparent',
        elevation: 0,
      },
      headerTintColor: 'black',
      title: 'ХАДГАЛСАН',
      headerTitleStyle: {
        marginLeft: wp('-7%'),
      },
      headerLeft: () => (
        <TouchableOpacity
          style={{width: wp('15%')}}
          onPress={() => screenProps.navigation.goBack()}>
          <Icon
            style={{marginLeft: wp('5%')}}
            name="ios-arrow-back"
            color="#00000050"
            size={wp('8%')}
          />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => screenProps.navigation.goBack()}>
          <Icon
            style={{marginRight: wp('6%')}}
            name="ios-notifications"
            color="#00000050"
            size={wp('7%')}
          />
        </TouchableOpacity>
      ),
    }),
  },
});
const AppNavigator = createAppContainer(App);
class Savenews extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <AppNavigator screenProps={{navigation: this.props.navigation}} />;
  }
}
export default Savenews;
